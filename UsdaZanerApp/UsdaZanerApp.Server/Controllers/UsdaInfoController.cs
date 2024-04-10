using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UsdaZanerApp.Server.Data;

namespace UsdaZanerApp.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsdaInfoController : ControllerBase
{
    private readonly AppDbContext dbContext;

    public UsdaInfoController(AppDbContext dbContext)
    {
        this.dbContext = dbContext;
    }
}
