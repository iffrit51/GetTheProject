import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacefreelanceComponent } from './espacefreelance.component';

describe('EspacefreelanceComponent', () => {
  let component: EspacefreelanceComponent;
  let fixture: ComponentFixture<EspacefreelanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacefreelanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacefreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
