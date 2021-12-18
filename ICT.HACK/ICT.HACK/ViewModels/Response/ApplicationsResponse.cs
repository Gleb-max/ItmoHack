namespace ICT.HACK.ViewModels.Response
{
    public class ApplicationsResponse
    {
        public IEnumerable<ApplicationResponse> Applications { get; set; }

        public class ApplicationResponse
        {
            public Guid Id { get; set; }

            public string VkId { get; set; }

            public Guid CreatorId { get; set; }

            public Guid AdvertisementId { get; set; }
        }
    }
}
