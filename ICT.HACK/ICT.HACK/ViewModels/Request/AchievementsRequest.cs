using ICT.HACK.Models.Enums;

namespace ICT.HACK.ViewModels.Request
{
    public class AchievementsRequest
    {
        public int Page { get; set; }

        public string OwnerId { get; set; }

        public AchievementSpheres? Sphere { get; set; }
    }
}
