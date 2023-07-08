import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoctorComponent } from './addoctor.component';

describe('AddoctorComponent', () => {
  let component: AddoctorComponent;
  let fixture: ComponentFixture<AddoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
