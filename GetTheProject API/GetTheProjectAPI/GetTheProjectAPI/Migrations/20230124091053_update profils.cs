using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GetTheProjectAPI.Migrations
{
    /// <inheritdoc />
    public partial class updateprofils : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email1",
                table: "Profils",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email2",
                table: "Profils",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email3",
                table: "Profils",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email4",
                table: "Profils",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email5",
                table: "Profils",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NomSociete",
                table: "Profils",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Siret",
                table: "Profils",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SiteWeb",
                table: "Profils",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email1",
                table: "Profils");

            migrationBuilder.DropColumn(
                name: "Email2",
                table: "Profils");

            migrationBuilder.DropColumn(
                name: "Email3",
                table: "Profils");

            migrationBuilder.DropColumn(
                name: "Email4",
                table: "Profils");

            migrationBuilder.DropColumn(
                name: "Email5",
                table: "Profils");

            migrationBuilder.DropColumn(
                name: "NomSociete",
                table: "Profils");

            migrationBuilder.DropColumn(
                name: "Siret",
                table: "Profils");

            migrationBuilder.DropColumn(
                name: "SiteWeb",
                table: "Profils");
        }
    }
}
