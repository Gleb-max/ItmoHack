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
    [Route("api/requests")]
    [ApiController]
    [Authorize("Everyone")]
    public class AchievementRequestController : ControllerBase
    {
        private const int RequestsOnPage = 10;

        private readonly IServiceProvider _serviceProvider;

        public AchievementRequestController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public ActionResult<AchievementRequestsResponse> Get([FromQuery] AchievementRequestsRequest searchOptions)
        {
            var achievementRequestRepository = _serviceProvider.GetRequiredService<IRepository<AchievementRequest>>();

            IQueryable<AchievementRequest> query = achievementRequestRepository.Query().Include(a => a.Owner);

            string userId = User.FindFirst(Program.Configuration["UserClaims:Id"]).Value;
            if (Guid.TryParse(userId, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный claim:userid.");
                return BadRequest(ModelState);
            }

            query = query.Where(a => guid == a.OwnerId);

            query = searchOptions.SearchType switch
            {
                AchievementRequestsRequest.AchievementRequestsSearchTypes.All => query,
                AchievementRequestsRequest.AchievementRequestsSearchTypes.Moderation => query.Where(a => a.Accepted.HasValue == false),
                AchievementRequestsRequest.AchievementRequestsSearchTypes.Accepted => query.Where(a => a.Accepted.HasValue && a.Accepted.Value == true),
                AchievementRequestsRequest.AchievementRequestsSearchTypes.Denied => query.Where(a => a.Accepted.HasValue && a.Accepted.Value == false),
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
        public async Task<ActionResult<AchievementRequestResponse>> GetAsync([FromRoute] string id)
        {
            var achievementRequestRepository = _serviceProvider.GetRequiredService<IRepository<AchievementRequest>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            AchievementRequest request = await achievementRequestRepository.Query()
                                                                           .Include(a => a.Owner)
                                                                           .FirstOrDefaultAsync(a => a.Id.ToString() == id);
            if (request == null)
            {
                return NotFound();
            }

            var response = new AchievementRequestResponse()
            {
                Id = request.Id.ToString(),
                Name = request.Name,
                Description = request.Description,
                Points = request.Points,
                ProofLink = request.ProofLink, 
                Accepted = request.Accepted,
                OwnerName = request.Owner.Name,
                OwnerId = request.OwnerId.ToString()
            };
            
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<string>> PostAsync([FromBody] AchievementRequestRequest achievementRequestData)
        {
            var achievementRequestRepository = _serviceProvider.GetRequiredService<IRepository<AchievementRequest>>();

            string userId = User.FindFirst(Program.Configuration["UserClaims:Id"]).Value;
            if (Guid.TryParse(userId, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный claim:userid.");
                return BadRequest(ModelState);
            }

            AchievementRequest request = new AchievementRequest()
            {
                Name = achievementRequestData.Name,
                Description = achievementRequestData.Description,
                ProofLink = achievementRequestData.ProofLink,
                Points = achievementRequestData.Points,
                CreatedDate = DateTime.Today,
                OwnerId = guid
            };

            await achievementRequestRepository.AddAsync(request);
            await achievementRequestRepository.SaveAsync();

            return Ok(request.Id.ToString());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync([FromRoute] string id)
        {
            var achievementRequestRepository = _serviceProvider.GetRequiredService<IRepository<AchievementRequest>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный claim:userid.");
                return BadRequest(ModelState);
            }

            AchievementRequest request = await achievementRequestRepository.FindAsync(guid);
            if(request == null)
            {
                return NotFound();
            }

            if(string.Equals(User.FindFirst(Program.Configuration["UserClaims:Id"]).Value, request.OwnerId.ToString(), StringComparison.OrdinalIgnoreCase) == false)
            {
                ModelState.AddModelError("Message", "Вы не можете удалить чужой запрос.");
                return BadRequest(ModelState);
            }

            achievementRequestRepository.Delete(request);
            await achievementRequestRepository.SaveAsync();
            
            return Ok();
        }
    }
}
