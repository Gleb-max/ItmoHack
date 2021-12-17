namespace ICT.HACK.Models
{
    public class Statistics
    {
        public Guid Id { get; set; }

        public int Physical { get; set; }

        public int Technical { get; set; }

        public int Humanities { get; set; }

        public int Natural { get; set; }

        public int SoftSkills { get; set; }

        public User Owner { get; set;}
        public Guid OwnerId { get; set; }
    }
}
