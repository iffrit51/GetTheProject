import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('DeposerProfilComponent', () => {
  let component: DeposerProfilComponent;
  let fixture: ComponentFixture<DeposerProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeposerProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeposerProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposer-profil',
  templateUrl: './deposer-profil.component.html',
  styleUrls: ['./deposer-profil.component.css']
})
export class DeposerProfilComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

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