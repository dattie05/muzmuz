import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuzComponent } from './muz.component';

describe('MuzComponent', () => {
  let component: MuzComponent;
  let fixture: ComponentFixture<MuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
