using GetTheProjectAPI.Data;
using GetTheProjectAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GetTheProjectAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DepotProfilsController : Controller
    {
        private readonly GetTheProjectDbContext _getTheProjectDbContext;

        public DepotProfilsController(GetTheProjectDbContext getTheProjectDbContext)
        {
            _getTheProjectDbContext = getTheProjectDbContext;
        }

        // Ajouter un profil (POST)
        [HttpPost]
        public async Task<IActionResult> AddDepotProfil([FromBody] DepotProfils depotProfilRequest)
        {
            if (depotProfilRequest == null)
            {
                return BadRequest("Les données du profil sont invalides.");
            }

            // Ajouter le profil à la base de données
            await _getTheProjectDbContext.DepotProfils.AddAsync(depotProfilRequest);
            await _getTheProjectDbContext.SaveChangesAsync();

            // Retourner une réponse avec le profil créé
            return CreatedAtAction(nameof(GetDepotProfil), new { id = depotProfilRequest.Id }, depotProfilRequest);
        }

        // Récupérer un profil par ID (GET)
        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetDepotProfil([FromRoute] int id)
        {
            var profil = await _getTheProjectDbContext.DepotProfils
                                                      .FirstOrDefaultAsync(x => x.Id == id);
            if (profil == null)
            {
                return NotFound($"Profil avec l'ID {id} non trouvé.");
            }
            return Ok(profil);
        }
    }
}