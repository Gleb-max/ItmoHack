namespace ICT.HACK.Models
{
    public class Advertisement
    {
        public Guid Id { get; set; }

        public string Topic { get; set; }

        public string Description { get; set; }

        public DateTime PublishDate { get; set; }

        public User Creator { get; set; }
        public Guid CreatorId { get; set; }

        public IEnumerable<Application> Applications { get; set; }
    }
}
