import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientfinalComponent } from './clientfinal.component';

describe('ClientfinalComponent', () => {
  let component: ClientfinalComponent;
  let fixture: ComponentFixture<ClientfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientfinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
