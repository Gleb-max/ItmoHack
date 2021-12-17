using System.ComponentModel.DataAnnotations;

namespace ICT.HACK.ViewModels.Request
{
    public class RegistrationRequest
    {
        [Required]
        public string ISUId { get; set;}

        [Required]
        public string Name { get; set; }

        [Required]
        public string FacultyId { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
