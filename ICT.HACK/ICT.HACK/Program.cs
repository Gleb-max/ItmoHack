using ICT.HACK.Storage;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace ICT.HACK
{
    public class Program
    {
        public static IConfiguration Configuration { get; private set; }

        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            Configuration = builder.Configuration;

            ConfigureServices(builder.Services);

            Configure(builder.Build());
        }

        public static void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<IctContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("DbConnection"));
            });

            services.AddControllers();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = true;
                    options.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidAudience = Configuration["JwtBearer:Audience"],
                        ValidIssuer = Configuration["JwtBearer:Issuer"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["JwtBearer:SymmetricKey"])),

                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateIssuerSigningKey = true
                    };
                });

            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
        }

        public static void Configure(WebApplication app)
        {
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
