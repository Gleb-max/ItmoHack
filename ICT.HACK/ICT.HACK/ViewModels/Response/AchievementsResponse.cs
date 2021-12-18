using ICT.HACK.Models.Enums;

namespace ICT.HACK.ViewModels.Response
{
    public class AchievementsResponse
    {
        public IEnumerable<ShortAchievementResponse> Achievements { get; set;}

        public class ShortAchievementResponse
        {
            public string Id { get; set; }

            public string Name { get; set; }

            public int Points { get; set; }

            public AchievementSpheres Sphere { get; set; }
        }
    }
}
