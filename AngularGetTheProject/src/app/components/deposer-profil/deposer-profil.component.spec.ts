import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposerProfilComponent } from './deposer-profil.component';

describe('DeposerProfilComponent', () => {
  let component: DeposerProfilComponent;
  let fixture: ComponentFixture<DeposerProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeposerProfilComponent]
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
