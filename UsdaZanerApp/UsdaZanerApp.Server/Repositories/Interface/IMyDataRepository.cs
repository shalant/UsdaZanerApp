using UsdaZanerApp.Server.Data;

namespace UsdaZanerApp.Server.Repositories.Interface;

public interface IMyDataRepository
{
    //should only work with domain models
    Task<IEnumerable<UsdaDBObject>> GetAllMyDataAsync();
}
