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
    [Route("api/[controller]")]
    [ApiController]
    [Authorize("Everyone")]
    public class FacultyController : ControllerBase
    {
        private const int CountFacultyOnPage = 10;

        private readonly IServiceProvider _serviceProvider;

        public FacultyController(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<FacultyResponse>> GetAsync([FromRoute] Guid id)
        {
            var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();
            var userRepository = _serviceProvider.GetRequiredService<IRepository<User>>();

            Faculty faculty = await facultyRepository.FindAsync(id);
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
        [AllowAnonymous]
        public ActionResult<FacultiesResponse> Get()
        {
            var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();

            IEnumerable<Faculty> faculties = facultyRepository.Query()
                                                              .Select(f => new Faculty()
                                                              {
                                                                  Id = f.Id,
                                                                  Name = f.Name
                                                              })
                                                              .AsEnumerable();
            FacultiesResponse response = new FacultiesResponse() { Faculties = faculties };

            return Ok(response);
        }

        [HttpGet]
        [Route("top")]
        public ActionResult<FacultiesTopResponse> GetTop([FromQuery] int page)
        {
            var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();

            var faculties = facultyRepository.Query()
                                             .Include(f => f.Students)
                                             .Select(f => new FacultiesTopResponse.FacultyInTopResponse()
                                             {
                                                 Id = f.Id,
                                                 Name = f.Name,
                                                 Points = f.Students.Sum(s => s.Statistics.Physical +
                                                                              s.Statistics.Technical +
                                                                              s.Statistics.Humanities +
                                                                              s.Statistics.Natural +
                                                                              s.Statistics.SoftSkills)
                                             })
                                             .Skip(CountFacultyOnPage * page)
                                             .Take(CountFacultyOnPage)
                                             .AsEnumerable();
            var response = new FacultiesTopResponse { Faculties = faculties };

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

            return Ok(newFaculty.Id);
        }

        [HttpPut("{id}")]
        [Authorize("Admin")]
        public async Task<ActionResult> PutAsync([FromRoute] Guid id, [FromBody] EditFacultyRequest facultyData)
        {
            var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();

            Faculty faculty = await facultyRepository.FindAsync(id);
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
        public async Task<IActionResult> DeleteAsync([FromRoute] Guid id)
        {
            var facultyRepository = _serviceProvider.GetRequiredService<IRepository<Faculty>>();

            var faculty = await facultyRepository.FindAsync(id);
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
