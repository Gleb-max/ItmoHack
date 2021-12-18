using ICT.HACK.Models.Enums;

namespace ICT.HACK.ViewModels.Response
{
    public class AchievementResponse
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public AchievementSpheres Sphere { get; set; }

        public int Points { get; set; }

        public DateTime ConfirmedDate { get; set; }

        public string OwnerName { get; set; }

        public string OwnerISUId { get; set; }

        public Guid OwnerId { get; set; }
    }
}
