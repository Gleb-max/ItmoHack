using System.ComponentModel.DataAnnotations;

namespace ICT.HACK.ViewModels.Request
{
    public class AchievementRequestRequest // название класса 👍🏻👍🏻👍🏻
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }
        
        [Required]
        public int Points { get; set; }

        [Required]
        public string ProofLink { get; set; }
    }
}
