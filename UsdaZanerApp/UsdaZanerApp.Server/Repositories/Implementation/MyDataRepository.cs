using Microsoft.EntityFrameworkCore;
using UsdaZanerApp.Server.Data;
using UsdaZanerApp.Server.Repositories.Interface;

namespace UsdaZanerApp.Server.Repositories.Implementation;

public class MyDataRepository : IMyDataRepository
{
    private readonly AppDbContext appDbContext;

    public MyDataRepository(AppDbContext appDbContext)
    {
        this.appDbContext = appDbContext;
    }

    public async Task<IEnumerable<UsdaDBObject>> GetAllMyDataAsync()
    {
        return await appDbContext.UsdaDBObjects.ToListAsync();
    }
}
