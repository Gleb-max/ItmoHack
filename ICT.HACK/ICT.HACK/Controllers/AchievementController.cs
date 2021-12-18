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
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Everyone")]
    public class AchievementController : ControllerBase
    {
        private const int AchievementsOnPage = 10;

        private readonly IServiceProvider _serviceProvider;

        public AchievementController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public ActionResult<AchievementsResponse> Get([FromQuery] AchievementsRequest searchOptions)
        {
            var achievementRepository = _serviceProvider.GetRequiredService<IRepository<Achievement>>();

            if (Guid.TryParse(searchOptions.OwnerId, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            IQueryable<Achievement> query = achievementRepository.Query().Where(a => a.OwnerId == guid);
            if (searchOptions.Sphere.HasValue)
            {
                query = query.Where(a => a.Sphere == searchOptions.Sphere);
            }

            query = query.OrderByDescending(a => a.ConfirmedDate)
                         .Skip(AchievementsOnPage * searchOptions.Page)
                         .Take(AchievementsOnPage);

            AchievementsResponse response = new AchievementsResponse()
            {
                Achievements = query.Select(a => new AchievementsResponse.ShortAchievementResponse()
                {
                    Id = a.Id.ToString(),
                    Name = a.Name,
                    Points = a.Points,
                    Sphere = a.Sphere,
                })
            };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AchievementResponse>> GetAsync([FromRoute] string id)
        {
            var achievementRepository = _serviceProvider.GetRequiredService<IRepository<Achievement>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            AchievementResponse response = await achievementRepository.Query()
                                                                      .Include(a => a.Owner)
                                                                      .Select(a => new AchievementResponse()
                                                                      {
                                                                          Id = a.Id.ToString(),
                                                                          Name = a.Name,
                                                                          Description = a.Description,
                                                                          Points = a.Points,
                                                                          Sphere = a.Sphere,
                                                                          ConfirmedDate = a.ConfirmedDate,
                                                                          OwnerName = a.Owner.Name,
                                                                          OwnerISUId = a.Owner.ISUId,
                                                                          OwnerId = a.OwnerId.ToString()
                                                                      })
                                                                      .FirstOrDefaultAsync(a => string.Equals(id, a.Id, StringComparison.OrdinalIgnoreCase));

            if(response == null)
            {
                return NotFound();
            }

            return Ok(response);
        }

        [HttpDelete("{id}")]
        [Authorize("Admin")]
        public async Task<ActionResult> DeleteAsync([FromRoute] string id)
        {
            var achievementRepository = _serviceProvider.GetRequiredService<IRepository<Achievement>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            Achievement achievement = await achievementRepository.FindAsync(guid);
            if (achievement == null)
            {
                return NotFound();
            }

            achievementRepository.Delete(achievement);
            await achievementRepository.SaveAsync();

            return Ok();
        }
    }
}
