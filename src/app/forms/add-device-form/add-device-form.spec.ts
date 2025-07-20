import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceForm } from './add-device-form';

describe('AddDeviceForm', () => {
  let component: AddDeviceForm;
  let fixture: ComponentFixture<AddDeviceForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDeviceForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeviceForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
