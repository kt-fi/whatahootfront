import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGameControlComponent } from './admin-game-control.component';

describe('AdminGameControlComponent', () => {
  let component: AdminGameControlComponent;
  let fixture: ComponentFixture<AdminGameControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGameControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
