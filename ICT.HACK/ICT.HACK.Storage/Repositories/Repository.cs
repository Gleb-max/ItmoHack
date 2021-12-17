using ICT.HACK.Storage.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace ICT.HACK.Storage.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly IctContext _context;

        public Repository(IctContext context)
        {
            _context = context;
        }

        public async Task AddAsync(T entity)
        {
            var set = _context.Set<T>();
            await set.AddAsync(entity);
        }

        public void Delete(T entity)
        {
            var set = _context.Set<T>();
            set.Remove(entity);
        }

        public void Edit(T entity)
        {
            var set = _context.Set<T>();
            set.Update(entity);
        }

        public async Task<T> FindAsync(object arg)
        {
            var set = _context.Set<T>();
            return await set.FindAsync(arg);
        }

        public DbSet<T> Query()
        {
            var set = _context.Set<T>();
            return set;
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
