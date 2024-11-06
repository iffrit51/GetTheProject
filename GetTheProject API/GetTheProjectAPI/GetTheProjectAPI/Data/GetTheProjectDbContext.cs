using GetTheProjectAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace GetTheProjectAPI.Data
{
    public class GetTheProjectDbContext:DbContext
    {
        public GetTheProjectDbContext(DbContextOptions options):base(options) { }

        public DbSet<Mission> Missions { get; set; }
        public DbSet<Profil> Profils { get; set; }
    }
}
