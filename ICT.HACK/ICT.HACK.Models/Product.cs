﻿namespace ICT.HACK.Models
{
    public class Product
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int Count { get; set; }

        public int Price { get; set; }

        public string ImageName { get; set; }

        public IEnumerable<Purchase> Purchases { get; set; }
    }
}
