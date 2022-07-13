import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPortalComponent } from './room-portal.component';

describe('RoomPortalComponent', () => {
  let component: RoomPortalComponent;
  let fixture: ComponentFixture<RoomPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
