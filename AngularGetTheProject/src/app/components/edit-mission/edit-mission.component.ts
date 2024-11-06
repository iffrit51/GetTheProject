import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mission } from 'src/app/Models/mission.model';
import { MissionsService } from 'src/app/Services/missions.service';
@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.scss']
})
export class EditMissionComponent implements OnInit {

  missionDetails:Mission={
    id: '',
    reference: '',
    intitule: '',
    lieu:'' ,
    demarage: new Date(),
    societe:''

  };
  

  constructor(private route : ActivatedRoute,private MissionsService:MissionsService,private router:Router){
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) =>{
        const id=params.get('id');
        if(id){
          this.MissionsService.getMission(id)
          .subscribe({
            next: (response) =>{
              this.missionDetails=response;
            }
          });
        }
      }
    
    })
  }
  updateMission(){
    this.MissionsService.updateMission(this.missionDetails.id,this.missionDetails)
    .subscribe({
      next :(Response)=>{
        this.router.navigate(['missions']);
      }
    })
  }
  deleteMission(id:string){
    this.MissionsService.deleteMission(id)
    .subscribe({
      next : (response)=>{
        this.router.navigate(['missions']);
      }
    })

  }

}
