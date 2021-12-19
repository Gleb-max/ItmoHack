using ICT.HACK.Models;
using ICT.HACK.Storage.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ICT.HACK.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Everyone")]
    public class GameController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;

        public GameController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        [Route("ref")]
        public ActionResult GetReference()
        {
            string token = Request.Headers["Authorization"].First().Split(" ")[1];
            //string reference = $"{Request.Host}/wwwroot/game.html?token={token}";


            var response = new { referenсe = $"https://8d13-77-234-209-96.ngrok.io?token={token}" };
            return Ok(response);
        }

        [HttpGet]
        [Route("available")]
        public async Task<ActionResult<bool>> GetAvailability()
        {
            string userId = User.FindFirst(Program.Configuration["UserClaims:Id"]).Value;
            if (Guid.TryParse(userId, out var userGuid) == false)
            {
                ModelState.AddModelError("Message", "Неверный claim:userid.");
                return BadRequest(ModelState);
            }

            bool canPlay = await CheckPlayAvailability(userGuid);

            var response = new { available = canPlay };
            return Ok(response);
        }

        [HttpPost]
        [Route("prize")]
        public async Task<ActionResult> PostPrize()
        {
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();

            string userId = User.FindFirst(Program.Configuration["UserClaims:Id"]).Value;
            if (Guid.TryParse(userId, out var userGuid) == false)
            {
                ModelState.AddModelError("Message", "Неверный claim:userid.");
                return BadRequest(ModelState);
            }

            bool canPlay = await CheckPlayAvailability(userGuid);
            if (!canPlay)
            {
                ModelState.AddModelError("Message", "У вас нет доступных попыток для игры.");
                return BadRequest(ModelState);
            }

            var random = new Random();
            int prizePoints = random.Next(10);

            User user = await userRepository.FindAsync(userGuid);
            user.Balance += prizePoints;
            user.PlaysCount += 1;

            userRepository.Edit(user);
            await userRepository.SaveAsync();

            var response = new { message = $"Поздравляем! Вы получили {prizePoints} баллов." };

            return Ok(response);
        }

        private async Task<bool> CheckPlayAvailability(Guid userGuid)
        {
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();

            var user = await userRepository.Query()
                                           .Include(u => u.Achievements)
                                           .Select(u => new
                                           {
                                               id = u.Id,
                                               playsCount = u.PlaysCount,
                                               achievementsCount = u.Achievements.Count()
                                           })
                                           .FirstOrDefaultAsync(u => u.id == userGuid);

            bool canPlay = (user.playsCount < user.achievementsCount);

            return canPlay;
        }
    }
}
