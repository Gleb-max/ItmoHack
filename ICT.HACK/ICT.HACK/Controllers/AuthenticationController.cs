using ICT.HACK.Models;
using ICT.HACK.Storage.Abstractions;
using ICT.HACK.ViewModels.Request;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ICT.HACK.Controllers
{
    [Route("api/Auth")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;

        public AuthenticationController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet]
        [Route("token")]
        public async Task<ActionResult> GetAsync([FromQuery] LoginRequest loginData)
        {
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();
            var passwordHasher = _serviceProvider.GetRequiredService<IPasswordHasher<User>>();

            if (ModelState.IsValid == false)
                return BadRequest(ModelState);

            User user = await userRepository.Query()
                                            .Include(u => u.Role)
                                            .FirstOrDefaultAsync(u => u.ISUId == loginData.ISUId);
            if (user == null)
            {
                ModelState.AddModelError("Message", "Пользователь не найден.");
                return BadRequest(ModelState);
            }

            if(((int)passwordHasher.VerifyHashedPassword(user, user.PasswordHash, loginData.Password)) != 1)
            {
                ModelState.AddModelError("Message", "Неверный пароль.");
                return BadRequest(ModelState);
            }

            ClaimsIdentity identity = GetUserIdentity(user);
            var securityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Program.Configuration["JwtOptions:SymmetricKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var nowTime = DateTime.Now;

            var jwt = new JwtSecurityToken(
                issuer: Program.Configuration["JwtOptions:Issuer"],
                audience: Program.Configuration["JwtOptions:Audience"],
                notBefore: DateTime.Now,
                claims: identity.Claims,
                expires: nowTime.Add(TimeSpan.FromDays(7)),
                signingCredentials: credentials);
            string encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                token = encodedJwt,
                data = new
                {
                    id = user.Id,
                    isuid = user.ISUId,
                    name = user.Name,
                    role = user.Role.Name
                }
            };

            return Ok(response);
        }

        private ClaimsIdentity GetUserIdentity(User user)
        {
            var claims = new List<Claim>()
            {
                new Claim(Program.Configuration["UserClaims:Id"], user.Id.ToString()),
                new Claim(Program.Configuration["UserClaims:ISUId"], user.ISUId.ToString()),
                new Claim(Program.Configuration["UserClaims:Name"], user.Name),
                new Claim(Program.Configuration["UserClaims:Role"], user.Role.Name)
            };

            var identity = new ClaimsIdentity(claims, JwtBearerDefaults.AuthenticationScheme, Program.Configuration["UserClaims:Name"], Program.Configuration["UserClaims:Role"]);

            return identity;
        }
    }
}
