import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversuccessregisterComponent } from './driversuccessregister.component';

describe('DriversuccessregisterComponent', () => {
  let component: DriversuccessregisterComponent;
  let fixture: ComponentFixture<DriversuccessregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversuccessregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversuccessregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
