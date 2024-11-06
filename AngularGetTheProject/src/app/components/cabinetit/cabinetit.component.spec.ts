import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetitComponent } from './cabinetit.component';

describe('CabinetitComponent', () => {
  let component: CabinetitComponent;
  let fixture: ComponentFixture<CabinetitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
