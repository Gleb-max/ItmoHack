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
    [Route("api/faculty")]
    [ApiController]
    [Authorize("Everyone")]
    public class FacultyController : ControllerBase
    {
        private readonly IServiceProvider _serviceProvider;

        public FacultyController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<FacultyResponse>> GetAsync([FromRoute] string id)
        {
            var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            Faculty faculty = await facultyRepository.FindAsync(guid);
            if (faculty == null)
            {
                return NotFound();
            }

            IQueryable<User> students = userRepository.Query()
                                                      .Include(u => u.Statistics)
                                                      .Where(u => u.FacultyId == faculty.Id);

            FacultyResponse response = new FacultyResponse()
            {
                Name = faculty.Name,
                Description = faculty.Description,
                Physical = await students.SumAsync(u => u.Statistics.Physical),
                Technical = await students.SumAsync(u => u.Statistics.Technical),
                Humanities = await students.SumAsync(u => u.Statistics.Humanities),
                Natural = await students.SumAsync(u => u.Statistics.Natural),
                SoftSkills = await students.SumAsync(u => u.Statistics.SoftSkills),
                StudentsCount = await students.CountAsync()
            };

            return Ok(response);
        }

        [HttpGet]
        public ActionResult<FacultiesResponse> Get()
        {
            var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();

            IEnumerable<Faculty> faculties = facultyRepository.Query().AsEnumerable();
            FacultiesResponse response = new FacultiesResponse() { Faculties = faculties };

            return Ok(response);
        }

        [HttpPost]
        [Authorize("Admin")]
        public async Task<ActionResult> PostAsync([FromBody] FacultyRequest facultyData)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();

            bool isFacultyExist = await facultyRepository.Query().AnyAsync(f => f.Name == facultyData.Name);
            if (isFacultyExist)
            {
                ModelState.AddModelError("Message", "Факультет с таким названием уже существует.");
                return BadRequest(ModelState);
            }

            Faculty newFaculty = new Faculty()
            {
                Name = facultyData.Name,
                Description = facultyData.Description
            };
            await facultyRepository.AddAsync(newFaculty);
            await facultyRepository.SaveAsync();

            return Ok();
        }

        [HttpPut("{id}")]
        [Authorize("Admin")]
        public async Task<ActionResult> PutAsync([FromRoute] string id, [FromBody] EditFacultyRequest facultyData)
        {
            var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            Faculty faculty = await facultyRepository.FindAsync(guid);
            if (faculty == null)
            {
                return NotFound();
            }

            faculty.Name = facultyData.Name == null ? faculty.Name : facultyData.Name;
            faculty.Description = facultyData.Description == null ? faculty.Description : facultyData.Description;

            facultyRepository.Edit(faculty);
            await facultyRepository.SaveAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        [Authorize("Admin")]
        public async Task<IActionResult> DeleteAsync([FromRoute] string id)
        {
            var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();

            if (Guid.TryParse(id, out var guid) == false)
            {
                ModelState.AddModelError("Message", "Неверный формат id.");
                return BadRequest(ModelState);
            }

            var faculty = await facultyRepository.FindAsync(guid);
            if (faculty == null)
            { 
                return NotFound();
            }

            facultyRepository.Delete(faculty);
            await facultyRepository.SaveAsync();

            return Ok();
        }
    }
}
