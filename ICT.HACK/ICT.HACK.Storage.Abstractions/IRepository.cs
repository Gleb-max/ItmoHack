﻿using Microsoft.EntityFrameworkCore;

namespace ICT.HACK.Storage.Abstractions
{
    public interface IRepository<T> where T : class
    {
        public DbSet<T> Query();

        public Task<T> GetByIdAsync(int id);

        public Task AddAsync(T entity);

        public void Edit(T entity);

        public void Delete(T entity);

        public Task SaveAsync();
    }
}
