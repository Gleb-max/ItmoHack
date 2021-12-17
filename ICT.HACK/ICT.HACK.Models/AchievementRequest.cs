namespace ICT.HACK.Models
{
    public class AchievementRequest
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ProofLink { get; set; }

        public int Points { get; set; }
        
        public bool? Accepted { get; set; }

        public DateTime CreatedDate { get; set; }

        public User Owner { get; set; }
        public Guid OwnerId { get; set; }
    }
}
