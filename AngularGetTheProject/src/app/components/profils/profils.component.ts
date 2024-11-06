import { Component,OnInit } from '@angular/core';
import {  ProfilsService } from 'src/app/Services/profils.service';
import { Profil } from '../../Models/profil.model';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent implements OnInit{
  profils: Profil[]= [];
  searchText='';
    constructor(private ProfilsService:ProfilsService ){
      
    }
    ngOnInit(): void {
      this.ProfilsService.getAllProfils()
      .subscribe({
        next:(profils) =>{
          this.profils =profils;
        },
        error:(response) =>{
          console.log(response);
        }
        
      })
      console.log(this.profils);
    }
}
