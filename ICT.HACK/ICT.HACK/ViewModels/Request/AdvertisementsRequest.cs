using System.ComponentModel.DataAnnotations;

namespace ICT.HACK.ViewModels.Request
{
    public class AdvertisementsRequest
    {
        [Required]
        public int Page { get; set; }

        public string? Keywords { get; set; }
    }
}
