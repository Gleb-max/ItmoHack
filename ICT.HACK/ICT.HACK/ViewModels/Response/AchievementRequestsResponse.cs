namespace ICT.HACK.ViewModels.Response
{
    public class AchievementRequestsResponse
    {
        public IEnumerable<ShortAchievementRequestResponse> AchievementRequests { get; set; }

        public class ShortAchievementRequestResponse
        {
            public Guid Id { get; set; }

            public string Name { get; set; }

            public int Points { get; set; }

            public bool? Accepted { get; set; }

            public string OwnerName { get; set; }

            public Guid OwnerId { get; set; }
        }
    }
}
