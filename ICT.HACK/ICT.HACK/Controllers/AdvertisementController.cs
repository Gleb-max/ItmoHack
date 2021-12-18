using ICT.HACK.Models;
using ICT.HACK.Storage.Abstractions;
using ICT.HACK.ViewModels.Request;
using ICT.HACK.ViewModels.Request.Post;
using ICT.HACK.ViewModels.Response;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ICT.HACK.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdvertisementController : ControllerBase
    {
        private const int CountAdvertisementsOnPage = 10;

        private readonly IServiceProvider _serviceProvider;

        public AdvertisementController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public ActionResult<AdvertisementsResponse> Get([FromQuery] AdvertisementsRequest searchOptions)
        {
            var advertisementRepository = _serviceProvider.GetRequiredService<IRepository<Advertisement>>();

            IQueryable<Advertisement> advertisements = advertisementRepository.Query();
            if (!string.IsNullOrEmpty(searchOptions.Keywords))
            {
                string[] allKeywords = searchOptions.Keywords.Split();
                advertisements = advertisements.Where(a => allKeywords.Any(w => (a.Topic.Contains(w) || a.Description.Contains(w))));
            }
            advertisements = advertisements.OrderByDescending(a => a.PublishDate)
                                           .Skip(CountAdvertisementsOnPage * searchOptions.Page)
                                           .Take(CountAdvertisementsOnPage);

            var response = new AdvertisementsResponse()
            {
                Advertisements = advertisements.Select(a => new AdvertisementsResponse.ShortAdvertisementResponse()
                {
                    Id = a.Id,
                    Topic = a.Topic,
                    PublishDate = a.PublishDate
                })
            };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AdvertisementResponse>> Get([FromRoute] Guid id)
        {
            var advertisementRepository = _serviceProvider.GetRequiredService<IRepository<Advertisement>>();

            Advertisement advertisement = await advertisementRepository.FindAsync(id);
            if(advertisement == null)
            {
                return NotFound();
            }

            var response = new AdvertisementResponse()
            {
                Topic = advertisement.Topic,
                Description = advertisement.Description,
                PublishDate = advertisement.PublishDate,
                CreatorId = advertisement.CreatorId
            };
            
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<string>> Post([FromBody] AdvertisementRequest advertisementData)
        {
            var advertisementRepository = _serviceProvider.GetRequiredService<IRepository<Advertisement>>();

            string userId = User.FindFirst(Program.Configuration["UserClaims:Id"]).Value;
            if (Guid.TryParse(userId, out var userGuid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id пользователя.");
                return BadRequest(ModelState);
            }

            var advertisement = new Advertisement()
            {
                Topic = advertisementData.Topic,
                Description = advertisementData.Description,
                PublishDate = DateTime.Today,
                CreatorId = userGuid
            };

            await advertisementRepository.AddAsync(advertisement);
            await advertisementRepository.SaveAsync();

            return Ok(advertisement);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync([FromRoute] Guid id)
        {
            var advertisementRepository = _serviceProvider.GetRequiredService<IRepository<Advertisement>>();

            string userId = User.FindFirst(Program.Configuration["UserClaims:Id"]).Value;
            if (Guid.TryParse(userId, out var userGuid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id пользователя.");
                return BadRequest(ModelState);
            }

            Advertisement advertisement = await advertisementRepository.FindAsync(id);
            if(advertisement == null)
            {
                return NotFound();
            }

            if((advertisement.CreatorId != userGuid) && (User.IsInRole("Admin") == false))
            {
                ModelState.AddModelError("Message", "Вы не можете удалить чужое объявление.");
                return BadRequest(ModelState);
            }

            advertisementRepository.Delete(advertisement);
            await advertisementRepository.SaveAsync();
            
            return Ok();
        }
    }
}
