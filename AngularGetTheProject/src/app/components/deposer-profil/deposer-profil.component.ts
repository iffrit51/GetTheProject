import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepotProfilsService } from 'src/app/Services/depot-profils.service';
import { Router } from '@angular/router';
import { DepotProfils } from 'src/app/Models/depotprofils.model';

@Component({
  selector: 'app-deposer-profil',
  templateUrl: './deposer-profil.component.html',
  styleUrls: ['./deposer-profil.component.scss']
})
export class DeposerProfilComponent  {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  currentStep = 0; // Track the current step
  constructor(
    private _formBuilder: FormBuilder,
    private depotProfilService: DepotProfilsService, // Service pour gérer les dépôts de profil
    private router: Router
  ) {
    this.firstFormGroup = this._formBuilder.group({
      titreProfil: ['', Validators.required],
      website: [''],
      formation: [''],
      niveauEtude: ['', Validators.required],
      competences: [''],
      parcours: [''],
      langue1: [''],
      langue1Proficiency: [''],
      langue2: [''],
      langue2Proficiency: [''],
      langue3: [''],
      langue3Proficiency: ['']
    });

    this.secondFormGroup = this._formBuilder.group({
      experience: ['', Validators.required],
      tarif: ['', Validators.required],
      disponibilite: ['', Validators.required],
      metier: [''],
      recherche: [''],
      permis: [''],
      envoiEmails: [false]
    });
  }

  goToNextStep() {
    if (this.firstFormGroup.valid) {
      this.currentStep = 1;
    } else {
      alert("Veuillez remplir tous les champs requis dans le formulaire.");
    }
  }

  goToPreviousStep() {
    this.currentStep = 0;
  }

  // Méthode pour soumettre le formulaire
  addDepotProfil() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      // Création de l'objet depotProfil selon les valeurs du formulaire
      const depotProfil: DepotProfils = {
        id: 0,  // Définir l'ID à 0 (généré côté serveur)
        titreProfil: this.firstFormGroup.get('titreProfil')?.value,
        website: this.firstFormGroup.get('website')?.value,
        formation: this.firstFormGroup.get('formation')?.value,
        niveauEtude: this.firstFormGroup.get('niveauEtude')?.value,
        competences: this.firstFormGroup.get('competences')?.value,
        parcours: this.firstFormGroup.get('parcours')?.value,
        langue1: this.firstFormGroup.get('langue1')?.value,
        langue1Proficiency: this.firstFormGroup.get('langue1Proficiency')?.value,
        langue2: this.firstFormGroup.get('langue2')?.value,
        langue2Proficiency: this.firstFormGroup.get('langue2Proficiency')?.value,
        langue3: this.firstFormGroup.get('langue3')?.value,
        langue3Proficiency: this.firstFormGroup.get('langue3Proficiency')?.value,
        experience: this.secondFormGroup.get('experience')?.value,
        tarif: this.secondFormGroup.get('tarif')?.value,
        disponibilite: this.secondFormGroup.get('disponibilite')?.value,
        metier: this.secondFormGroup.get('metier')?.value,
        recherche: this.secondFormGroup.get('recherche')?.value,
        permis: this.secondFormGroup.get('permis')?.value,
        envoiEmails: this.secondFormGroup.get('envoiEmails')?.value
      };

      // Appel du service pour envoyer le profil à l'API
      this.depotProfilService.addDepotProfil(depotProfil).subscribe(
        (response) => {
          console.log('Profil ajouté avec succès!', response);
          alert("Profil soumis avec succès !");
          this.router.navigate(['profils']);  // Redirection vers la page des profils après soumission
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du profil:', error);
          alert("Une erreur est survenue lors de la soumission du profil.");
        }
      );
    } else {
      alert("Veuillez remplir tous les champs requis dans le formulaire.");
    }
  }
}