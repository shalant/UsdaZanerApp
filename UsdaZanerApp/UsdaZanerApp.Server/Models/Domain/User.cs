namespace UsdaZanerApp.Server.Models.Domain;

public class User
{
    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Telephone { get; set; }
    public DateTime DateAdded { get; set; }

    public ICollection<UserDataSet> UserDataSets { get; set; }
}
