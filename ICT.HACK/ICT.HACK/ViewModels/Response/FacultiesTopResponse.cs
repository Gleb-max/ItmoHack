namespace ICT.HACK.ViewModels.Response
{
    public class FacultiesTopResponse
    {
        public IEnumerable<FacultyInTopResponse> Faculties { get; set; }
        public class FacultyInTopResponse
        {
            public string Id { get; set; }

            public string Name { get; set; }

            public long Points { get; set; }
        }
    }
}
