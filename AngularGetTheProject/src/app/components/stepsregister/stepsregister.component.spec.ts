import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsregisterComponent } from './stepsregister.component';

describe('StepsregisterComponent', () => {
  let component: StepsregisterComponent;
  let fixture: ComponentFixture<StepsregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
