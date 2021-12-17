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

            modelBuilder.Entity<User>(e =>
            {
                e.HasKey(u => u.Id);
                e.Property(u => u.Id).HasDefaultValue("NEWID()");
                e.HasOne(u => u.Role).WithMany().HasForeignKey(u => u.RoleId);
                e.HasOne(u => u.Faculty).WithMany().HasForeignKey(u => u.FacultyId);
            });

            modelBuilder.Entity<Role>(e =>
            {
                e.HasKey(r => r.Id);
                e.Property(r => r.Id).HasDefaultValue("NEWID()");
            });

            modelBuilder.Entity<Statistics>(e =>
            {
                e.HasKey(s => s.Id);
                e.Property(s => s.Id).HasDefaultValue("NEWID()");
                e.HasOne(s => s.Owner).WithOne().HasForeignKey<Statistics>(s => s.OwnerId);
            });

            modelBuilder.Entity<Achievement>(e =>
            {
                e.HasKey(a => a.Id);
                e.Property(a => a.Id).HasDefaultValue("NEWID()");
                e.HasOne(a => a.Owner).WithMany().HasForeignKey(a => a.OwnerId);
            });

            modelBuilder.Entity<AchievementRequest>(e =>
            {
                e.HasKey(a => a.Id);
                e.Property(a => a.Id).HasDefaultValue("NEWID()");
                e.HasOne(a => a.Owner).WithMany().HasForeignKey(a => a.OwnerId);
            });

            modelBuilder.Entity<Faculty>(e =>
            {
                e.HasKey(f => f.Id);
                e.Property(f => f.Id).HasDefaultValue("NEWID()");
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
