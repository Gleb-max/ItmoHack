using ICT.HACK.Models;
using ICT.HACK.Storage.Abstractions;
using ICT.HACK.Storage.Repositories;
using Microsoft.AspNetCore.Identity;

namespace ICT.HACK.Extensions
{
    public static class ServiceCollectionExtensions
    {
        internal static IServiceCollection AddPasswordHasher(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddSingleton<IPasswordHasher<User>, PasswordHasher<User>>();
            return serviceCollection;
        }

        internal static IServiceCollection AddRoles(this IServiceCollection serviceCollection)
        {
            var roleRepository = serviceCollection.BuildServiceProvider().GetRequiredService<IRepository<Role>>();
            if (roleRepository.Query().Any() == false)
            {
                roleRepository.AddAsync(new Role()
                {
                    Name = "Student"
                }).Wait();
                roleRepository.AddAsync(new Role()
                {
                    Name = "Admin"
                }).Wait();
                roleRepository.SaveAsync().Wait();
            }
            return serviceCollection;
        }

        internal static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddRepository<User>();
            services.AddRepository<Role>();
            services.AddRepository<Achievement>();
            services.AddRepository<AchievementRequest>();
            services.AddRepository<Statistics>();
            services.AddRepository<Faculty>();
            services.AddRepository<Product>();
            services.AddRepository<Purchase>();

            return services;
        }

        private static IServiceCollection AddRepository<T>(this IServiceCollection services) where T : class
        {
            services.AddTransient<IRepository<T>, Repository<T>>();

            return services;
        }
    }
}
