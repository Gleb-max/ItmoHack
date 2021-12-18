namespace ICT.HACK.ViewModels.Request
{
    public class ProductRequest
    {
        public string Name { get; set; }

        public string Description { get; set; } 

        public int Price { get; set; }

        public int Count { get; set; }

        public byte[] Image { get; set; }
    }
}
