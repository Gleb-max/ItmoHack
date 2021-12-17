namespace ICT.HACK.Models
{
    public class User
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string PasswordHash { get; set; }

        public Statistics Statistics { get; set; }

        public IEnumerable<Achievement> Achievements { get; set; }

        public IEnumerable<AchievementRequest> AchievementsRequests { get; set; }

        public Faculty Faculty { get; set; }
        public Guid FacultyId { get; set; }

        public Role Role { get; set; }
        public Guid RoleId { get; set; }
    }
}
