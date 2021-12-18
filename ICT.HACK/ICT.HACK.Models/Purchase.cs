namespace ICT.HACK.Models
{
    public class Purchase
    {
        public Guid Id { get; set; }

        public DateTime Date { get; set; }

        public bool IsUsed { get; set; }

        public Product Product { get; set; }
        public Guid ProductId { get; set; }

        public User Buyer { get; set; }
        public Guid BuyerId { get; set; }
    }
}
