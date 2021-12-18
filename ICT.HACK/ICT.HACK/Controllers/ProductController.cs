using ICT.HACK.Models;
using ICT.HACK.Storage.Abstractions;
using ICT.HACK.ViewModels.Request;
using ICT.HACK.ViewModels.Response;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ICT.HACK.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Everyone")]
    public class ProductController : ControllerBase
    {
        private const int CountProductsOnPage = 10;

        private readonly IServiceProvider _serviceProvider;
        private readonly string _imagesPath;

        public ProductController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
            _imagesPath = Path.Combine(Program.Configuration[WebHostDefaults.ContentRootKey], "wwwroot", "img", "products");
        }

        [HttpGet]
        public ActionResult<ProductsResponse> Get([FromRoute] int page)
        {
            var productRepository = _serviceProvider.GetRequiredService<IRepository<Product>>();

            var products = productRepository.Query().Where(p => p.Count > 0)
                                                    .Skip(CountProductsOnPage * page)
                                                    .Take(CountProductsOnPage)
                                                    .Select(p => new ProductsResponse.ShortProductResponse()
                                                    {
                                                        Id = p.Id.ToString(),
                                                        Name = p.Name,
                                                        Count = p.Count,
                                                        Price = p.Price,
                                                        ImageName = p.ImageName
                                                    })
                                                    .AsEnumerable();

            var response = new ProductsResponse() { Products = products };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductResponse>> GetAsync([FromRoute] string id)
        {
            var productRepository = _serviceProvider.GetRequiredService<IRepository<Product>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            Product product = await productRepository.FindAsync(guid);
            if (product == null)
            {
                return NotFound();
            }

            ProductResponse response = new ProductResponse()
            {
                Id = product.Id.ToString(),
                Name = product.Name,
                Description = product.Description,
                Count = product.Count,
                Price = product.Price,
                ImageName = product.ImageName
            };

            return Ok(response);
        }

        [HttpPost]
        [Authorize("Admin")]
        public async Task<ActionResult<string>> PostAsync([FromForm] ProductRequest productData)
        {
            var productRepository = _serviceProvider.GetRequiredService<IRepository<Product>>();

            bool isProductExist = await productRepository.Query().AnyAsync(p => p.Name == productData.Name);
            if (isProductExist)
            {
                ModelState.AddModelError("Message", "Продукт с таким названием уже существует.");
                return BadRequest(ModelState);
            }

            Product newProduct = new Product()
            {
                Name = productData.Name,
                Description = productData.Description,
                Price = productData.Price,
                Count = productData.Count,
                ImageName = $"{productData.Name}.jpg"
            };

            using (FileStream imageFile = new FileStream(Path.Combine(_imagesPath, newProduct.ImageName), FileMode.Create))
            {
                await productData.Image.CopyToAsync(imageFile);
            }

            await productRepository.AddAsync(newProduct);
            await productRepository.SaveAsync();

            return Ok(newProduct.Id.ToString());
        }

        [HttpPut("{id}")]
        [Authorize("Admin")]
        public async Task<ActionResult> PutAsync([FromRoute] string id, [FromBody] EditProductRequest editData)
        {
            var productRepository = _serviceProvider.GetRequiredService<IRepository<Product>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            Product product = await productRepository.FindAsync(guid);
            if (product == null)
            {
                return NotFound();
            }

            bool isProductExist = await productRepository.Query().AnyAsync(p => p.Name == editData.Name);
            if (isProductExist)
            {
                ModelState.AddModelError("Message", "Продукт с таким названием уже существует.");
                return BadRequest(ModelState);
            }

            string oldImageName = product.ImageName;
            product.Name = editData.Name ?? product.Name;
            product.Description = editData.Description ?? product.Description;
            product.Count = editData.Count ?? product.Count;
            product.Price = editData.Price ?? product.Price;
            product.ImageName = editData.Name != null ? $"{editData.Name}.jpg" : product.ImageName;

            if (editData.Image != null)
            {
                try { System.IO.File.Delete(Path.Combine(_imagesPath, oldImageName)); } catch { }
                using (FileStream imageFile = new FileStream(Path.Combine(_imagesPath, product.ImageName), FileMode.Create))
                {
                    await imageFile.WriteAsync(editData.Image);
                }
            }

            productRepository.Edit(product);
            await productRepository.SaveAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        [Authorize("Admin")]
        public async Task<ActionResult> DeleteAsync([FromRoute] string id)
        {
            var productRepository = _serviceProvider.GetRequiredService<IRepository<Product>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            Product product = await productRepository.FindAsync(guid);
            if (product == null)
            {
                return NotFound();
            }

            string wwwroot = Program.Configuration[WebHostDefaults.ContentRootKey];
            try { System.IO.File.Delete(Path.Combine(wwwroot, product.ImageName)); } catch { }

            productRepository.Delete(product);
            await productRepository.SaveAsync();

            return Ok();
        }
    }
}
