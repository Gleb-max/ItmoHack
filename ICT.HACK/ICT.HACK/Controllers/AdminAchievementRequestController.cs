using ICT.HACK.Models;
using ICT.HACK.Storage.Abstractions;
using ICT.HACK.ViewModels.Request;
using ICT.HACK.ViewModels.Response;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ICT.HACK.Controllers
{
    [Route("api/admin/requests")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
    [ApiController]
    public class AdminAchievementRequestController : ControllerBase
    {
        private const int RequestsOnPage = 10;

        private readonly IServiceProvider _serviceProvider;

        public AdminAchievementRequestController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public ActionResult<AchievementRequestsResponse> Get([FromQuery] AchievementRequestsRequest searchOptions)
        {
            var achievementRequestRepository = _serviceProvider.GetRequiredService<IRepository<AchievementRequest>>();

            IQueryable<AchievementRequest> query = achievementRequestRepository.Query().Include(a => a.Owner);

            query = searchOptions.SearchType switch
            {
                AchievementRequestsRequest.AchievementRequestsSearchType.All => query,
                AchievementRequestsRequest.AchievementRequestsSearchType.Moderation => query.Where(a => a.Accepted.HasValue == false),
                AchievementRequestsRequest.AchievementRequestsSearchType.Accepted => query.Where(a => a.Accepted.HasValue && a.Accepted.Value == true),
                AchievementRequestsRequest.AchievementRequestsSearchType.Denied => query.Where(a => a.Accepted.HasValue && a.Accepted.Value == false),
                _ => query
            };

            query = query.OrderByDescending(a => a.CreatedDate)
                         .Skip(searchOptions.Page * RequestsOnPage)
                         .Take(RequestsOnPage);

            var requests = query.Select(a => new AchievementRequestsResponse.ShortAchievementRequestResponse()
            {
                Id = a.Id.ToString(),
                Name = a.Name,
                Points = a.Points,
                Accepted = a.Accepted,
                OwnerName = a.Owner.Name,
                OwnerId = a.OwnerId.ToString()
            });

            var response = new AchievementRequestsResponse() { AchievementRequests = requests };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
