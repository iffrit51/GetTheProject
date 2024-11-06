import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionsService } from 'src/app/Services/missions.service';
import { Mission } from '../../Models/mission.model';
@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.scss']
})
export class AddMissionComponent implements OnInit{

  addMissionRequest:Mission={
    id: '',
    reference: '',
    intitule: '',
    lieu:'' ,
    demarage: new Date(),
    societe:''

  };
  constructor(private MissionsService:MissionsService, private router:Router){

  }
  ngOnInit(): void {
    
  }

  addMission(){
    this.MissionsService.addMission(this.addMissionRequest).
    subscribe({
      next: (mission)=>{
        this.router.navigate(['missions']);

      }
    })
  }
}
