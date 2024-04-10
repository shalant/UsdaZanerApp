using UsdaZanerApp.Server.Data;

namespace UsdaZanerApp.Server.Models.Domain;

public class UserDataSet
{
    public int Id { get; set; }
    public string DataSetName { get; set; }
    public Guid UserId { get; set; }
    public Guid UsdaDbObjectId { get; set; }
    DateTime DateAdded { get; set; }
    DateTime LastModified { get; set; }

    public User User { get; set; }
    public UsdaDBObject UsdaDBObject { get; set; }
}
