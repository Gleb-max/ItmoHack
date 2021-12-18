﻿using System.ComponentModel.DataAnnotations.Schema;

namespace ICT.HACK.Models
{
    public class User
    {
        public Guid Id { get; set; }

        public string ISUId { get; set; }

        public string Name { get; set; }

        public string PasswordHash { get; set; }

        public Statistics Statistics { get; set; }

        public int Balance { get; set; }

        public int PlaysCount { get; set; }

        public IEnumerable<Achievement> Achievements { get; set; }

        public IEnumerable<AchievementRequest> AchievementsRequests { get; set; }

        public IEnumerable<Purchase> Purchases { get; set; }

        public IEnumerable<Advertisement> Advertisements { get; set; }

        public Faculty Faculty { get; set; }
        public Guid? FacultyId { get; set; }

        public Role Role { get; set; }
        public Guid RoleId { get; set; }
    }
}
