import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentwordComponent } from './currentword.component';

describe('CurrentwordComponent', () => {
  let component: CurrentwordComponent;
  let fixture: ComponentFixture<CurrentwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentwordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
