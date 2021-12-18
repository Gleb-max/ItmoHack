namespace ICT.HACK.Models
{
    public class Application
    {
        public Guid Id { get; set; }

        public string VkId { get; set; }

        public Advertisement Advertisement { get; set; }
        public Guid AdvertisementId { get; set; }

        public User Creator { get; set; }
        public Guid CreatorId { get; set; } 
    }
}
