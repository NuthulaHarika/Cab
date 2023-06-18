import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetuserpasswordComponent } from './forgetuserpassword.component';

describe('ForgetuserpasswordComponent', () => {
  let component: ForgetuserpasswordComponent;
  let fixture: ComponentFixture<ForgetuserpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetuserpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetuserpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
