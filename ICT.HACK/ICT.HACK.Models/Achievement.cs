namespace ICT.HACK.Models
{
    public class Achievement
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Sphere { get; set; }

        public int Points { get; set; }

        public User Owner { get; set; }
        public Guid OwnerId { get; set; }
    }
}
