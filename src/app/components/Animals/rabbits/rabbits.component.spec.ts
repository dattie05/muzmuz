import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitsComponent } from './rabbits.component';

describe('RabbitsComponent', () => {
  let component: RabbitsComponent;
  let fixture: ComponentFixture<RabbitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabbitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RabbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
