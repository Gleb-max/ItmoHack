namespace ICT.HACK.ViewModels.Response
{
    public class PurchaseResponse
    {
        public DateTime Date { get; set; }

        public bool IsUsed { get; set; }

        public string QRImageName { get; set; }

        public string ProductName { get; set; }

        public int ProductPrice { get; set; }

        public Guid ProductId { get; set; }

        public string BuyerName { get; set; }

        public Guid BuyerId { get; set; }
    }
}
