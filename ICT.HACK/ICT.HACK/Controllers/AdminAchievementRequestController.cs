using ICT.HACK.Models;
using ICT.HACK.Models.Enums;
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
    [ApiController]
    [Authorize("Admin")]
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

        [HttpPut("{id}")]
        public async Task<ActionResult> PutAsync([FromRoute] string id, [FromBody] EditAchievementRequestRequest editData)
        {
            var achievementRequestRepository = _serviceProvider.GetRequiredService<IRepository<AchievementRequest>>();
            var achievementRepository = _serviceProvider.GetRequiredService<IRepository<Achievement>>();
            var statisticsRepository = _serviceProvider.GetRequiredService<IRepository<Statistics>>();
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            AchievementRequest request = await achievementRequestRepository.Query()
                                                                           .Include(a => a.Owner)
                                                                           .ThenInclude(u => u.Statistics)
                                                                           .FirstOrDefaultAsync(a => a.Id == guid);
            if (request == null)
            {
                return NotFound();
            }

            request.Accepted = editData.Accepted;
            if (editData.Accepted)
            {
                request.Points = editData.Points.HasValue ? editData.Points.Value : request.Points;

                Achievement achievement = new Achievement()
                {
                    Name = request.Name,
                    Description = request.Description,
                    Points = request.Points,
                    Sphere = editData.Sphere,
                    OwnerId = request.OwnerId,
                    ConfirmedDate = DateTime.Today
                };

                request.Owner.Balance += request.Points;
                switch (editData.Sphere)
                {
                    case AchievementSpheres.Physical: request.Owner.Statistics.Physical += request.Points; break;
                    case AchievementSpheres.Technical: request.Owner.Statistics.Technical += request.Points; break;
                    case AchievementSpheres.Humanities: request.Owner.Statistics.Humanities += request.Points; break;
                    case AchievementSpheres.Natural: request.Owner.Statistics.Natural += request.Points; break;
                    case AchievementSpheres.SoftSkills: request.Owner.Statistics.SoftSkills += request.Points; break;
                }

                await achievementRepository.AddAsync(achievement);
                statisticsRepository.Edit(request.Owner.Statistics);
                userRepository.Edit(request.Owner);

                await achievementRepository.SaveAsync();
                await statisticsRepository.SaveAsync();
                await userRepository.SaveAsync();
            }

            achievementRequestRepository.Edit(request);
            await achievementRequestRepository.SaveAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync([FromRoute] string id)
        {
            var achievementRequestRepository = _serviceProvider.GetRequiredService<IRepository<AchievementRequest>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            AchievementRequest request = await achievementRequestRepository.FindAsync(guid);
            if (request == null)
            {
                return NotFound();
            }

            achievementRequestRepository.Delete(request);
            await achievementRequestRepository.SaveAsync();

            return Ok();
        }
    }
}
