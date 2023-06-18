import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookhistoryComponent } from './userbookhistory.component';

describe('UserbookhistoryComponent', () => {
  let component: UserbookhistoryComponent;
  let fixture: ComponentFixture<UserbookhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserbookhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserbookhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
