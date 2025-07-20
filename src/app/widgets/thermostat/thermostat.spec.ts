import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thermostat } from './thermostat';

describe('Thermostat', () => {
  let component: Thermostat;
  let fixture: ComponentFixture<Thermostat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thermostat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thermostat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
