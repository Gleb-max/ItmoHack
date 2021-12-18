namespace ICT.HACK.ViewModels.Response
{
    public class ProductsResponse
    {
        public IEnumerable<ShortProductResponse> Products { get; set; }

        public class ShortProductResponse
        {
            public string Id { get; set; }

            public string Name { get; set; }

            public int Price { get; set; }

            public int Count { get; set; }

            public string ImageName { get; set; }
        }
    }
}
