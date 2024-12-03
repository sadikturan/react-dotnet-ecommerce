using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
            new List<Product> {
                new Product { Id=1, Name="IPhone 15", Description="Telefon açıklaması", ImageUrl="1.jpg", Price=70000, IsActive=true, Stock=100  },
                new Product { Id=2, Name="IPhone 16", Description="Telefon açıklaması", ImageUrl="2.jpg", Price=80000, IsActive=true, Stock=100  },
                new Product { Id=3, Name="IPhone 16 Pro", Description="Telefon açıklaması", ImageUrl="3.jpg", Price=90000, IsActive=false, Stock=100  },
                new Product { Id=4, Name="IPhone 16 Pro Max", Description="Telefon açıklaması", ImageUrl="4.jpg", Price=100000, IsActive=true, Stock=100  }
            }
        );


    }

}