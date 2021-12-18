﻿using System.ComponentModel.DataAnnotations;

namespace ICT.HACK.ViewModels.Request
{
    public class UsersRequest
    {
        [Required]
        public int Page { get; set; }

        public bool InFaculty { get; set; }

        public Guid? FacultyId { get; set; }
    }
}
