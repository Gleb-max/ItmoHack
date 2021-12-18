namespace ICT.HACK.ViewModels.Response
{
    public class AdvertisementsResponse
    {
        public IEnumerable<ShortAdvertisementResponse> Advertisements { get; set;}

        public class ShortAdvertisementResponse
        {
            public Guid Id { get; set; }

            public string Topic { get; set; }

            public DateTime PublishDate { get; set;}
        }
    }
}
