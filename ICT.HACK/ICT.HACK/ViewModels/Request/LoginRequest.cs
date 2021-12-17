using System.ComponentModel.DataAnnotations;

namespace ICT.HACK.ViewModels.Request
{
    public class LoginRequest
    {
        [Required]
        public string ISUId { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
