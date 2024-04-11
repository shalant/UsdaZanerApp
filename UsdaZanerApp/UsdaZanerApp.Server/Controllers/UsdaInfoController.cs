using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UsdaZanerApp.Server.Data;
using UsdaZanerApp.Server.Models.DTO;
using UsdaZanerApp.Server.Repositories.Interface;

namespace UsdaZanerApp.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsdaInfoController : ControllerBase
{
    private readonly IMyDataRepository myDataRepository;

    public UsdaInfoController(IMyDataRepository myDataRepository)
    {
        this.myDataRepository = myDataRepository;
    }

    // GET: /api/mydata
    [HttpGet]
    public async Task<IActionResult> GetAllMyData()
    {
        var myData = await myDataRepository.GetAllMyDataAsync();

        // Map domain model to DTO
        var response = new List<MyDataDto>();
        foreach (var item in  myData)
        {
            response.Add(new MyDataDto
            {
                Id = item.Id,
                UserFirstName = item.UserFirstName,
                UserLastName = item.UserLastName,
                CreatedDate = item.CreatedDate,
                LastModifiedDate = item.LastModifiedDate,
                prodn_practice_desc = item.prodn_practice_desc,
                domain_desc = item.domain_desc,
                county_name = item.county_name,
                freq_desc = item.freq_desc,
                begin_code = item.begin_code,
                watershed_code = item.watershed_code,
                end_code = item.end_code,
                state_alpha = item.state_alpha,
                agg_level_desc = item.agg_level_desc,
                CV = item.CV,
                state_ansi = item.state_ansi,
                util_practice_desc = item.util_practice_desc,
                region_desc = item.region_desc,
                state_fips_code = item.state_fips_code,
                county_code = item.county_code,
                week_ending = item.week_ending,
                year = item.year,
                watershed_desc = item.watershed_desc,
                unit_desc = item.unit_desc,
                country_name = item.country_name,
                domaincat_desc = item.domaincat_desc,
                location_desc = item.location_desc,
                zip_5 = item.zip_5,
                group_desc = item.group_desc,
                load_time = item.load_time,
                Value = item.Value,
                asd_desc = item.asd_desc,
                county_ansi = item.county_ansi,
                asd_code = item.asd_code,
                commodity_desc = item.commodity_desc,
                statisticcat_desc = item.statisticcat_desc,
                congr_district_code = item.congr_district_code,
                state_name = item.state_name,
                reference_period_desc = item.reference_period_desc,
                source_desc = item.source_desc,
                class_desc = item.class_desc,
                sector_desc = item.sector_desc,
                country_code = item.country_code,
                short_desc = item.short_desc
            });
        }

        return Ok(response);
    }
}
