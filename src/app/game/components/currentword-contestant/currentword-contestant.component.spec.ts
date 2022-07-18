import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentwordContestantComponent } from './currentword-contestant.component';

describe('CurrentwordContestantComponent', () => {
  let component: CurrentwordContestantComponent;
  let fixture: ComponentFixture<CurrentwordContestantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentwordContestantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentwordContestantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
