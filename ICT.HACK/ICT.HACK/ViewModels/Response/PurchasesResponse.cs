namespace ICT.HACK.ViewModels.Response
{
    public class PurchasesResponse
    {
        public IEnumerable<ShortPurchasesResponse> Purchases { get; set; } 

        public class ShortPurchasesResponse
        {
            public Guid Id { get; set; }

            public DateTime Date { get; set; }

            public bool IsUsed { get; set; }

            public string ProductName { get; set; }

            public string BuyerName { get; set; }
        }

    }
}
