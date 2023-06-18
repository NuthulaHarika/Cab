import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermybookingsComponent } from './usermybookings.component';

describe('UsermybookingsComponent', () => {
  let component: UsermybookingsComponent;
  let fixture: ComponentFixture<UsermybookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermybookingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermybookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
