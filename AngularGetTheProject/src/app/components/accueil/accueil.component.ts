import { Component, OnInit } from '@angular/core';
import { MissionsService } from 'src/app/Services/missions.service';
import {  ProfilsService } from 'src/app/Services/profils.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{
  numberOfMissions: number=0;
  numberOfProfils: number=0;
  constructor(private missionsService:MissionsService,private ProfilsService:ProfilsService){
      
  }
  ngOnInit(): void {
    this.missionsService.getNumberOfMissions()
    .subscribe({
      next:(numberOfMissions) =>{
        this.numberOfMissions =numberOfMissions;
        
      },
      error:(response) =>{
        console.log(response);
      }
      
    })
    this.ProfilsService.getNumberOfProfils()
    .subscribe({
      next:(numberOfProfils) =>{
        this.numberOfProfils =numberOfProfils;
        
      },
      error:(response) =>{
        console.log(response);
      }
      
    })
  }

}
