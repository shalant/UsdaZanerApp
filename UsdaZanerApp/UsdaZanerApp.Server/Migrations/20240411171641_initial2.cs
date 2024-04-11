using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UsdaZanerApp.Server.Migrations
{
    /// <inheritdoc />
    public partial class initial2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UsdaDBObjects",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserFirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserLastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifiedDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    prodn_practice_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    domain_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    county_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    freq_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    begin_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    watershed_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    end_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    state_alpha = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    agg_level_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CV = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    state_ansi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    util_practice_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    region_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    state_fips_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    county_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    week_ending = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    year = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    watershed_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    unit_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    country_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    domaincat_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    location_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    zip_5 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    group_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    load_time = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    asd_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    county_ansi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    asd_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    commodity_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    statisticcat_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    congr_district_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    state_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    reference_period_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    source_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    class_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    sector_desc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    country_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    short_desc = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsdaDBObjects", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UsdaDBObjects");
        }
    }
}
