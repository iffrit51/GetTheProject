import { Component,OnInit } from '@angular/core';
import { MissionsService } from 'src/app/Services/missions.service';
import { Mission } from '../../Models/mission.model';
@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit{
  missions: Mission[]= [];
  searchText='';
    constructor(private missionsService:MissionsService){
      
    }
    ngOnInit(): void {
      this.missionsService.getAllMissions()
      .subscribe({
        next:(missions) =>{
          this.missions =missions;
          
        },
        error:(response) =>{
          console.log(response);
        }
        
      })
    }
}
