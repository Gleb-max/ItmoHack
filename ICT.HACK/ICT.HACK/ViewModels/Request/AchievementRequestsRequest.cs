using System.ComponentModel.DataAnnotations;

namespace ICT.HACK.ViewModels.Request
{
    public class AchievementRequestsRequest
    {
        [Required]
        public int Page { get; set; }

        [Required]
        public AchievementRequestsSearchTypes SearchType { get; set; }

        public enum AchievementRequestsSearchTypes
        {
            All,
            Accepted,
            Denied,
            Moderation,
        }
    }
}
