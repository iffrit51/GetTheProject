import { Component,OnInit } from '@angular/core';
import {  ProfilsService } from 'src/app/Services/profils.service';
import { Profil } from 'src/app/Models/profil.model';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {
  
  profilDetails:Profil={
    id: '',
    type :'',
    civilite :'',
    prenom :'',
    nom :'',
    email :'',
    fonction :'',
    motdepasse:'',
    adresse :'',
    codePostal :'',
    ville :'',
    pays :'',
    telephone :'',
    nomsociete :'',
    siret :'',
    siteweb :'',
    email1 : '',
    email2 :'',
    email3 :'',
    email4 :'',
    email5 :'',

  };
  constructor(private route : ActivatedRoute,private ProfilsService:ProfilsService,private router:Router){
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) =>{
        const id=params.get('id');
        if(id){
          this.ProfilsService.getProfil(id)
          .subscribe({
            next: (response) =>{
              this.profilDetails=response;
            }
          });
        }
      }
    
    })
  }
  updateProfil(){
    this.ProfilsService.updateProfil(this.profilDetails.id,this.profilDetails).
    subscribe({
      next: (profil)=>{
        this.router.navigate(['profils']);

      }
    })
  }
  deleteProfil(id:string){
    this.ProfilsService.deleteProfil(id)
    .subscribe({
      next : (response)=>{
        this.router.navigate(['profils']);
      }
    })

  }

}
