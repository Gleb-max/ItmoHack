namespace ICT.HACK.ViewModels.Request
{
    public class UsersRequest
    {
        public int Page { get; set; }

        public bool InFaculty { get; set; }

        public string? FacultyId { get; set; }
    }
}
