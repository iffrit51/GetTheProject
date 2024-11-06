using GetTheProjectAPI.Data;
using GetTheProjectAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace GetTheProjectAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MissionsController : Controller
    {
        private readonly GetTheProjectDbContext _getTheProjectDbContext;
        public MissionsController(GetTheProjectDbContext getTheProjectDbContext)
        {
            _getTheProjectDbContext = getTheProjectDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllMissions()
        {
            var missions = await _getTheProjectDbContext.Missions.ToListAsync();
            return Ok(missions);
        }
        [HttpPost]
        public async Task<IActionResult> AddMission([FromBody] Mission missionRequest)
        {
            await _getTheProjectDbContext.Missions.AddAsync(missionRequest);
            await _getTheProjectDbContext.SaveChangesAsync();
            return Ok(missionRequest);
        }
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetMission([FromRoute] int id)
        {
            var mission=
            await _getTheProjectDbContext.Missions.FirstOrDefaultAsync(x=>x.Id==id);
            if (mission == null)
            {
                return NotFound();
            }
            return Ok(mission);
        }
        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateMission([FromRoute] int id,Mission updateMissionRequest)
        {
            var mission = await _getTheProjectDbContext.Missions.FindAsync(id);
            if (mission == null)
            {
                return NotFound();
            }
            mission.Reference=updateMissionRequest.Reference;
            mission.Societe=updateMissionRequest.Societe;
            mission.Intitule=updateMissionRequest.Intitule;
            mission.Demarage=updateMissionRequest.Demarage;
            mission.Lieu=updateMissionRequest.Lieu;
            await _getTheProjectDbContext.SaveChangesAsync();
            return Ok(mission);
        }
        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteMission([FromRoute] int id)
        {
            var mission = await _getTheProjectDbContext.Missions.FindAsync(id);
            if (mission == null)
            {
                return NotFound();
            }
            _getTheProjectDbContext.Missions.Remove(mission);
            await _getTheProjectDbContext.SaveChangesAsync();
            return Ok(mission);
        }
        [HttpGet("Number")]
        public async Task<int> GetNumbersOfMissions()
        {
            
            var query = from missions in this._getTheProjectDbContext.Missions

                        select missions.Id;

            return await query.CountAsync();

        }

    }
}
