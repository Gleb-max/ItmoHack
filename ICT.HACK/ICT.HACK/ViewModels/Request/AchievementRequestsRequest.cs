namespace ICT.HACK.ViewModels.Request
{
    public class AchievementRequestsRequest
    {
        public int Page { get; set; }

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
