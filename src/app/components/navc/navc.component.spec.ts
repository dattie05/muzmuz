import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcComponent } from './navc.component';

describe('NavcComponent', () => {
  let component: NavcComponent;
  let fixture: ComponentFixture<NavcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
