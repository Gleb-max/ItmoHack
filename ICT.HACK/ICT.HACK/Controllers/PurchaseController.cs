using ICT.HACK.Models;
using ICT.HACK.Services.Abstractions;
using ICT.HACK.Storage.Abstractions;
using ICT.HACK.ViewModels.Request;
using ICT.HACK.ViewModels.Request.Post;
using ICT.HACK.ViewModels.Response;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ICT.HACK.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Everyone")]
    public class PurchaseController : ControllerBase
    {
        private const int CountPurchasesOnPage = 10;

        private readonly IServiceProvider _serviceProvider;
        private readonly string _qrImagesPath;

        public PurchaseController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
            _qrImagesPath = Path.Combine(Program.Configuration[WebHostDefaults.ContentRootKey], "wwwroot", "qr", "purchases");
        }

        [HttpGet]
        public ActionResult<PurchasesResponse> Get([FromQuery] PurchasesRequest searchOptions)
        {
            var purchasesRepository = _serviceProvider.GetRequiredService<IRepository<Purchase>>();

            var purchases = purchasesRepository.Query()
                                               .Include(p => p.Buyer)
                                               .Include(p => p.Product)
                                               .Where(p => p.BuyerId == searchOptions.BuyerId)
                                               .OrderByDescending(p => p.Date)
                                               .Skip(searchOptions.Page * CountPurchasesOnPage)
                                               .Take(CountPurchasesOnPage)
                                               .Select(p => new PurchasesResponse.ShortPurchasesResponse()
                                               {
                                                   Id = p.Id,
                                                   Date = p.Date,
                                                   IsUsed = p.IsUsed,
                                                   BuyerName = p.Buyer.Name,
                                                   ProductName = p.Product.Name
                                               });
            var response = new PurchasesResponse() { Purchases = purchases };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PurchaseResponse>> Get([FromRoute] Guid id)
        {
            var purchaseRepository = _serviceProvider.GetRequiredService<IRepository<Purchase>>();

            Purchase purchase = await purchaseRepository.Query()
                                                        .Include(p => p.Buyer)
                                                        .Include(p => p.Product)
                                                        .FirstOrDefaultAsync(p => p.Id == id);

            if ((string.Equals(User.FindFirst(Program.Configuration["UserClaims:Id"]).Value, purchase.BuyerId.ToString(), StringComparison.OrdinalIgnoreCase) == false)
                && (User.IsInRole("Admin") == false))
            {
                ModelState.AddModelError("Message", "У вас нет прав просматривать эти данные.");
                return BadRequest(ModelState);
            }

            var response = new PurchaseResponse()
            {
                Date = purchase.Date,
                IsUsed = purchase.IsUsed,
                QRImageName = purchase.QRImageName,
                ProductName = purchase.Product.Name,
                ProductPrice = purchase.Product.Price,
                ProductId = purchase.ProductId,
                BuyerName = purchase.Buyer.Name,
                BuyerId = purchase.BuyerId
            };

            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<string>> Post([FromBody] PurchaseRequest purchaseData)
        {
            var purchaseRepository = _serviceProvider.GetRequiredService<IRepository<Purchase>>();
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();
            var productRepository = _serviceProvider.GetRequiredService<IRepository<Product>>();
            var qrGenerator = _serviceProvider.GetRequiredService<IQRGenerator>();

            if (Guid.TryParse(User.FindFirst(Program.Configuration["UserClaims:Id"]).Value, out var buyerGuid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id пользователя.");
                return BadRequest(ModelState);
            }

            Product product = await productRepository.FindAsync(purchaseData.ProductId);
            if (product == null)
            {
                ModelState.AddModelError("Message", "Продукт с таким id не найден.");
                return BadRequest(ModelState);
            }

            User buyer = await userRepository.FindAsync(buyerGuid);
            if (buyer == null)
            {
                ModelState.AddModelError("Message", "Пользователь с таким id не найден.");
                return BadRequest(ModelState);
            }

            Purchase purchase = new Purchase()
            {
                Date = DateTime.Today,
                IsUsed = false,
                BuyerId = buyerGuid,
                ProductId = product.Id,
                QRImageName = $"{Guid.NewGuid()}.png"
            };

            await qrGenerator.SaveQRAsync(Path.Combine(_qrImagesPath, purchase.QRImageName), purchase.Id.ToString());

            await purchaseRepository.AddAsync(purchase);
            await purchaseRepository.SaveAsync();

            return Ok(purchase.Id);
        }

        [HttpPut("{id}")]
        [Authorize("Admin")]
        public async Task<ActionResult> PutAsync(Guid id)
        {
            var purchaseRepository = _serviceProvider.GetRequiredService<IRepository<Purchase>>();

            Purchase purchase = await purchaseRepository.FindAsync(id);
            if(purchase == null)
            {
                return NotFound();
            }

            purchase.IsUsed = true;
            purchaseRepository.Edit(purchase);
            await purchaseRepository.SaveAsync();

            return Ok();
        }
    }
}
