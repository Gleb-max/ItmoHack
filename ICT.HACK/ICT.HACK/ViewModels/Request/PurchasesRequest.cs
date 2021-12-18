using System.ComponentModel.DataAnnotations;

namespace ICT.HACK.ViewModels.Request
{
    public class PurchasesRequest
    {
        [Required]
        public int Page { get; set; }

        [Required]
        public Guid BuyerId { get; set; }
    }
}
