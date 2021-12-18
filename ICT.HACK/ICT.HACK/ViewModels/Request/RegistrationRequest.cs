using System.ComponentModel.DataAnnotations;

namespace ICT.HACK.ViewModels.Request
{
    public class RegistrationRequest
    {
        [Required(ErrorMessage = "Вы не ввели ISU.")]
        public string ISUId { get; set;}

        [Required(ErrorMessage = "Вы не ввели имя и фамилию.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Вы не выбрали факультет.")]
        public Guid FacultyId { get; set; }

        [Required(ErrorMessage = "Вы не ввели пароль.")]
        [MinLength(8, ErrorMessage = "Минимальная длинна пароля - 8.")]
        public string Password { get; set; }
    }
}
