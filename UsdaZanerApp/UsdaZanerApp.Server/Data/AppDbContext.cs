﻿using Microsoft.EntityFrameworkCore;

namespace UsdaZanerApp.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }


    }
}
