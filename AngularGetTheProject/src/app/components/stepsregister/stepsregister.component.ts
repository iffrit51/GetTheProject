import { Component,OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {  ProfilsService } from 'src/app/Services/profils.service';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Profil } from 'src/app/Models/profil.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stepsregister',
  templateUrl: './stepsregister.component.html',
  styleUrls: ['./stepsregister.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class StepsregisterComponent implements OnInit {
  
  addProfilRequest:Profil={
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
  isText: boolean = false;
  type: string = "password";
  eyeIcon:string="fa-eye-slash";
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', ],
  });
  private opts = [
    { key: 'Civilité'},
    { key: 'Monsieur'},
    { key: 'Madame' }
  ];
  get firstSelectOptions() {
    return this.opts.map(({key}) => key);
  }
  constructor(private _formBuilder: FormBuilder,private router:Router,private ProfilsService:ProfilsService) {}
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type ="text" : this.type ="password";
  }
  ngOnInit(): void {}
  addProfil(){
    this.ProfilsService.addProfil(this.addProfilRequest).
    subscribe({
      next: (profil)=>{
        this.router.navigate(['profils']);

      }
    })
  }
}
