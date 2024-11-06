using GetTheProjectAPI.Data;
using GetTheProjectAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GetTheProjectAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfilsController : Controller
    {
        private readonly GetTheProjectDbContext _getTheProjectDbContext;
        public ProfilsController(GetTheProjectDbContext getTheProjectDbContext)
        {
            _getTheProjectDbContext = getTheProjectDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProfils()
        {
            var Profils = await _getTheProjectDbContext.Profils.ToListAsync();
            return Ok(Profils);
        }
        [HttpPost]
        public async Task<IActionResult> Addprofil([FromBody] Profil profilRequest)
        {
            await _getTheProjectDbContext.Profils.AddAsync(profilRequest);
            await _getTheProjectDbContext.SaveChangesAsync();
            return Ok(profilRequest);
        }
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> Getprofil([FromRoute] int id)
        {
            var profil =
            await _getTheProjectDbContext.Profils.FirstOrDefaultAsync(x => x.Id == id);
            if (profil == null)
            {
                return NotFound();
            }
            return Ok(profil);
        }
        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Updateprofil([FromRoute] int id, Profil updateprofilRequest)
        {
            var profil = await _getTheProjectDbContext.Profils.FindAsync(id);
            if (profil == null)
            {
                return NotFound();
            }
            profil.Type = updateprofilRequest.Type;
            profil.Civilite = updateprofilRequest.Civilite;
            profil.Prenom = updateprofilRequest.Prenom;
            profil.Nom = updateprofilRequest.Nom;
            profil.Fonction = updateprofilRequest.Fonction;
            profil.Email = updateprofilRequest.Email;
            profil.MotDePasse = updateprofilRequest.MotDePasse;
            profil.Adresse = updateprofilRequest.Adresse;
            profil.CodePostal = updateprofilRequest.CodePostal;
            profil.Ville = updateprofilRequest.Ville;
            profil.Pays = updateprofilRequest.Pays;
            profil.Telephone = updateprofilRequest.Telephone;
            await _getTheProjectDbContext.SaveChangesAsync();
            return Ok(profil);
        }
        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Deleteprofil([FromRoute] int id)
        {
            var profil = await _getTheProjectDbContext.Profils.FindAsync(id);
            if (profil == null)
            {
                return NotFound();
            }
            _getTheProjectDbContext.Profils.Remove(profil);
            await _getTheProjectDbContext.SaveChangesAsync();
            return Ok(profil);
        }
        [HttpGet("Number")]
        public async Task<int> GetNumbersOfProfils()
        {
            var query = from profils in this._getTheProjectDbContext.Profils

                        select profils.Id;

            return await query.CountAsync();
        }
    }
}
