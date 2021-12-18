namespace ICT.HACK.ViewModels.Response
{
    public class AchievementRequestResponse
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ProofLink { get; set; }

        public int Points { get; set; }

        public bool? Accepted { get; set; }

        public string OwnerName { get; set; }

        public Guid OwnerId { get; set; }
    }
}
