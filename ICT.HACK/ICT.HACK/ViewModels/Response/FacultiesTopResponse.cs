namespace ICT.HACK.ViewModels.Response
{
    public class FacultiesTopResponse
    {
        public IEnumerable<FacultyInTopResponse> Faculties { get; set; }
        public class FacultyInTopResponse
        {
            public Guid Id { get; set; }

            public string Name { get; set; }

            public long Points { get; set; }
        }
    }
}
