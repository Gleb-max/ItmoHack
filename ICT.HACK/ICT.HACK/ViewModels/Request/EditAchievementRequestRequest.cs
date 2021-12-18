using ICT.HACK.Models.Enums;

namespace ICT.HACK.ViewModels.Request
{
    public class EditAchievementRequestRequest // название просто супер
    {
        public bool Accepted { get; set; }

        public int? Points { get; set; }

        public AchievementSpheres Sphere { get; set; }
    }
}
