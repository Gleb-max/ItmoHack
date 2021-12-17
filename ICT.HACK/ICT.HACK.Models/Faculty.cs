namespace ICT.HACK.Models
{
    public class Faculty
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; } 

        public IEnumerable<User> Students { get; set; }
    }
}
