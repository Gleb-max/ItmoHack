using System.ComponentModel.DataAnnotations;

namespace ICT.HACK.ViewModels.Request
{
    public class LoginRequest
    {
        [Required(ErrorMessage = "Вы не ввели ISU.")]
        public string ISUId { get; set; }

        [Required(ErrorMessage = "Вы не ввели Пароль.")]
        public string Password { get; set; }
    }
}
