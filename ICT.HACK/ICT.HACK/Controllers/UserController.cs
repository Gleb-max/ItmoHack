using ICT.HACK.Models;
using ICT.HACK.Storage.Abstractions;
using ICT.HACK.ViewModels.Request;
using ICT.HACK.ViewModels.Response;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ICT.HACK.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class UserController : ControllerBase
    {
        private const int UsersCountInTop = 10;

        private readonly IServiceProvider _serviceProvider;

        public UserController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        public ActionResult<UsersResponse> Get([FromQuery] UsersRequest searchOptions)
        {
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();

            IQueryable<User> query = userRepository.Query().Include(u => u.Faculty);
            if (searchOptions.InFaculty)
                query = query.Where(u => u.FacultyId.ToString() == searchOptions.FacultyId);
            query = query.OrderByDescending(u => u.Statistics.Points);

            IEnumerable<UsersResponse.ShortUserResponse> users = query.Select(u => new UsersResponse.ShortUserResponse()
            {
                Id = u.Id,
                ISUId = u.ISUId,
                Name = u.Name,
                Faculty = u.Faculty.Name,
                Points = u.Statistics.Points
            });

            UsersResponse response = new UsersResponse() { Users = users.AsEnumerable() };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UserResponse>> Get(string id)
        {
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();

            User user = await userRepository.Query()
                                            .Include(u => u.Role)
                                            .Include(u => u.Statistics)
                                            .Include(u => u.Faculty)
                                            .FirstOrDefaultAsync(u => u.Id.ToString() == id);
            if (user == null)
                return NotFound();

            UserResponse response = new UserResponse()
            {
                Id = user.Id.ToString(),
                ISUId = user.ISUId,
                Name = user.Name,
                Faculty = user.Faculty.Name,
                Role = user.Role.Name,
                Physical = user.Statistics.Physical,
                Natural = user.Statistics.Natural,
                Humanities = user.Statistics.Humanities,
                SoftSkills = user.Statistics.SoftSkills,
                Technical = user.Statistics.Technical,
            };

            return Ok(response);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> PostAsync(RegistrationRequest registrationData)
        {
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();
            var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();
            var roleRepository = _serviceProvider.GetRequiredService<IRepository<Role>>();
            var statisticsRepository = _serviceProvider.GetRequiredService<IRepository<Statistics>>();
            var passwordHasher = _serviceProvider.GetRequiredService<IPasswordHasher<User>>();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            bool isUserExist = await userRepository.Query().AnyAsync(u => u.ISUId == registrationData.ISUId);
            if (isUserExist)
            {
                ModelState.AddModelError("Message", "Пользователь с таким ISU уже зарегистрирован.");
                return BadRequest(ModelState);
            }

            Faculty faculty = await facultyRepository.FindAsync(Guid.Parse(registrationData.FacultyId));
            if (faculty == null)
            {
                ModelState.AddModelError("Message", "Такого факультета не существует.");
                return BadRequest(ModelState);
            }

            User newUser = new User()
            {
                ISUId = registrationData.ISUId,
                Name = registrationData.Name,
                FacultyId = faculty.Id,
                RoleId = roleRepository.Query().FirstOrDefault(r => r.Name == "Student").Id,
            };
            newUser.PasswordHash = passwordHasher.HashPassword(newUser, registrationData.Password);
            await userRepository.AddAsync(newUser);
            await userRepository.SaveAsync();

            Statistics userStatistics = new Statistics()
            {
                OwnerId = newUser.Id
            };
            await statisticsRepository.AddAsync(userStatistics);
            await statisticsRepository.SaveAsync();

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutAsync(string id, [FromBody] EditUserRequest editData)
        {
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();

            if ((string.Equals(User.FindFirst(Program.Configuration["UserClaims:Id"])?.Value, id, StringComparison.OrdinalIgnoreCase) == false) && (User.IsInRole("Admin") == false))
            {
                ModelState.AddModelError("Message", "Вы не можете изменять данные другого пользователя.");
                return BadRequest(ModelState);
            }

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            User user = await userRepository.FindAsync(guid);
            if (user == null)
                return NotFound();

            user.Name = editData.Name == null ? user.Name : editData.Name;
            if (editData.FacultyId != null)
            {
                var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();
                Faculty faculty = await facultyRepository.FindAsync(Guid.Parse(editData.FacultyId));
                if (faculty == null)
                {
                    ModelState.AddModelError("Message", "Не найден факультет с таким id.");
                    return BadRequest(ModelState);
                }
                user.FacultyId = faculty.Id;
            }

            userRepository.Edit(user);
            await userRepository.SaveAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(string id)
        {
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();

            if ((string.Equals(User.FindFirst(Program.Configuration["UserClaims:Id"])?.Value, id, StringComparison.OrdinalIgnoreCase) == false) && (User.IsInRole("Admin") == false))
            {
                ModelState.AddModelError("Message", "Вы не можете удалить чужой профиль.");
                return BadRequest(ModelState);
            }

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            User user = await userRepository.FindAsync(guid);
            if (user == null)
            {
                return NotFound();
            }

            userRepository.Delete(user);
            await userRepository.SaveAsync();

            return Ok();
        }
    }
}
