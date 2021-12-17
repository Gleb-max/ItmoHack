namespace ICT.HACK.ViewModels.Request
{
    public class AchievementRequestsRequest
    {
        public int Page { get; set; }

        public AchievementRequestsSearchType SearchType { get; set; }

        public enum AchievementRequestsSearchType : byte
        {
            All = 0,
            Accepted = 1,
            Denied = 2,
            Moderation = 3,
        }
    }
}
