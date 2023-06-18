import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversuccessresetComponent } from './driversuccessreset.component';

describe('DriversuccessresetComponent', () => {
  let component: DriversuccessresetComponent;
  let fixture: ComponentFixture<DriversuccessresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversuccessresetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversuccessresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
