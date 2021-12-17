namespace ICT.HACK.ViewModels.Response
{
    public class UsersResponse
    {
        public IEnumerable<UserInTopResponse> Users { get; set; }
    }

    public class UserInTopResponse
    {
        public Guid Id { get; set; }

        public string ISUId { get; set; }

        public string Faculty { get; set; }

        public string Name { get; set; }

        public long Points { get; set; }
    }
}
