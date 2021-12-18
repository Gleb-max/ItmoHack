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
    public class ApplicationController : ControllerBase
    {
        private const int CountApplicationsOnPage = 10;

        private readonly IServiceProvider _serviceProvider;

        public ApplicationController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public ActionResult<ApplicationsResponse> Get(ApplicationsRequest searchOptions)
        {
            var applicationRepository = _serviceProvider.GetRequiredService<IRepository<Application>>();

            var applications = applicationRepository.Query()
                                                    .Include(a => a.CreatorId)
                                                    .Include(a => a.Advertisement)
                                                    .Skip(CountApplicationsOnPage * searchOptions.Page)
                                                    .Take(CountApplicationsOnPage)
                                                    .Select(a => new ApplicationsResponse.ApplicationResponse()
                                                    {
                                                        Id = a.Id,
                                                        VkId = a.VkId,
                                                        AdvertisementId = a.AdvertisementId,
                                                        CreatorId = a.CreatorId
                                                    });

            var response = new ApplicationsResponse() { Applications = applications };
            
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] ApplicationRequest applicationData)
        {
            var applicationRepository = _serviceProvider.GetRequiredService<IRepository<Application>>();
            var advertisementRepository = _serviceProvider.GetRequiredService<IRepository<Advertisement>>();

            string userId = User.FindFirst(Program.Configuration["UserClaims:Id"]).Value;
            if (Guid.TryParse(userId, out var userGuid) == false)
            {
                ModelState.AddModelError("Message", "Неверный claim:userid.");
                return BadRequest(ModelState);
            }            

            bool isAdvertisementExist = await advertisementRepository.Query().AnyAsync(a => a.Id == applicationData.AdvertisementId);
            if(isAdvertisementExist == false)
            {
                ModelState.AddModelError("Message", "Объявление с таким id не существует или было удалено.");
                return BadRequest(ModelState);
            }

            Application application = new Application()
            {
                VkId = applicationData.VkId,
                CreatorId = userGuid,
                AdvertisementId = applicationData.AdvertisementId,
            };

            await applicationRepository.AddAsync(application);
            await applicationRepository.SaveAsync();

            return Ok();
        }
    }
}
