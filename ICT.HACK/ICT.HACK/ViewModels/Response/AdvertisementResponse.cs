namespace ICT.HACK.ViewModels.Response
{
    public class AdvertisementResponse
    {
        public string Topic { get; set; }

        public string Description { get; set; }

        public DateTime PublishDate { get; set; }

        public Guid CreatorId { get; set; }
    }
}
