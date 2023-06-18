import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetdriverpasswordComponent } from './forgetdriverpassword.component';

describe('ForgetdriverpasswordComponent', () => {
  let component: ForgetdriverpasswordComponent;
  let fixture: ComponentFixture<ForgetdriverpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetdriverpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetdriverpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
