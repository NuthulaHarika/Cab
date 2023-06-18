import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessbookComponent } from './successbook.component';

describe('SuccessbookComponent', () => {
  let component: SuccessbookComponent;
  let fixture: ComponentFixture<SuccessbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
