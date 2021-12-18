using ICT.HACK.Models;
using Microsoft.EntityFrameworkCore;

namespace ICT.HACK.Storage
{
    public sealed class IctContext : DbContext
    {
        public IctContext(DbContextOptions options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Faculty>(e =>
            {
                e.HasKey(f => f.Id);
                e.Property(f => f.Id).HasDefaultValueSql("NEWID()");
            });

            modelBuilder.Entity<User>(e =>
            {
                e.HasKey(u => u.Id);
                e.HasAlternateKey(u => u.ISUId);
                e.Property(u => u.Id).HasDefaultValueSql("NEWID()");
                e.Property(u => u.FacultyId).IsRequired(false);
                e.HasOne(u => u.Role).WithMany().HasForeignKey(u => u.RoleId);
                e.HasOne(u => u.Faculty).WithMany(f => f.Students).HasForeignKey(u => u.FacultyId).OnDelete(DeleteBehavior.SetNull);
                e.HasOne(u => u.Statistics).WithOne().HasForeignKey<Statistics>(s => s.OwnerId);
            });

            modelBuilder.Entity<Role>(e =>
            {
                e.HasKey(r => r.Id);
                e.Property(r => r.Id).HasDefaultValueSql("NEWID()");
            });

            modelBuilder.Entity<Statistics>(e =>
            {
                e.HasKey(s => s.Id);
                e.Property(s => s.Id).HasDefaultValueSql("NEWID()");
            });

            modelBuilder.Entity<Achievement>(e =>
            {
                e.HasKey(a => a.Id);
                e.Property(a => a.Id).HasDefaultValueSql("NEWID()");
                e.HasOne(a => a.Owner).WithMany(u => u.Achievements).HasForeignKey(a => a.OwnerId);
            });

            modelBuilder.Entity<AchievementRequest>(e =>
            {
                e.HasKey(a => a.Id);
                e.Property(a => a.Id).HasDefaultValueSql("NEWID()");
                e.HasOne(a => a.Owner).WithMany(u => u.AchievementsRequests).HasForeignKey(a => a.OwnerId);
            });

            modelBuilder.Entity<Product>(e =>
            {
                e.HasKey(p => p.Id);
                e.Property(p => p.Id).HasDefaultValueSql("NEWID()");
            });

            modelBuilder.Entity<Purchase>(e =>
            {
                e.HasKey(p => p.Id);
                e.Property(p => p.Id).HasDefaultValueSql("NEWID()");
                e.HasOne(p => p.Buyer).WithMany(u => u.Purchases).HasForeignKey(p => p.BuyerId);
                e.HasOne(p => p.Product).WithMany(p => p.Purchases).HasForeignKey(p => p.ProductId);
            });

            modelBuilder.Entity<Advertisement>(e =>
            {
                e.HasKey(a => a.Id);
                e.Property(a => a.Id).HasDefaultValueSql("NEWID()");
                e.HasOne(a => a.Creator).WithMany(u => u.Advertisements).HasForeignKey(a => a.CreatorId);
            });

            modelBuilder.Entity<Application>(e =>
            {
                e.HasKey(a => a.Id);
                e.Property(a => a.Id).HasDefaultValueSql("NEWID()");
                e.HasOne(a => a.Advertisement).WithMany(a => a.Applications).HasForeignKey(a => a.AdvertisementId);
                e.HasOne(a => a.Creator).WithMany().HasForeignKey(a => a.CreatorId).OnDelete(DeleteBehavior.NoAction);
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
