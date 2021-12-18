using ICT.HACK.Models.Enums;
using System.ComponentModel.DataAnnotations;

namespace ICT.HACK.ViewModels.Request
{
    public class AchievementsRequest
    {
        [Required]
        public int Page { get; set; }

        [Required]
        public Guid OwnerId { get; set; }

        public AchievementSpheres? Sphere { get; set; }
    }
}
