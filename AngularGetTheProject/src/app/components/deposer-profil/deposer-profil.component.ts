import { Component,OnInit  } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposer-profil',
  standalone: true,
  imports: [],
  templateUrl: './deposer-profil.component.html',
  styleUrls: ['./deposer-profil.component.scss'],
})
export class DeposerProfilComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Fichier sélectionné :', file);

      // Ajoutez ici le code pour uploader le fichier ou l'envoyer à un backend
      // Exemple : envoyer le fichier à un service d'upload
      // this.uploadService.uploadFile(file).subscribe(response => {
      //   console.log('Upload réussi !');
      // });
    }
  }
  ngOnInit() {
    // Initialiser les groupes de formulaires pour chaque étape
    this.firstFormGroup = this._formBuilder.group({
      website: [''],
      formation: [''],
      niveauEtude: [''],
      competences: [''],
      // Ajoutez d'autres champs ici
    });

    this.secondFormGroup = this._formBuilder.group({
      tarif: [''],
      region: [''],
      disponibilite: [''],
      // Ajoutez d'autres champs ici
    });
  }

  onSubmit() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      console.log('Formulaire soumis avec succès', {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value
      });
      // Logique de soumission du formulaire
    }
  }
}