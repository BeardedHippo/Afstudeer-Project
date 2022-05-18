import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalScoresComponent } from './final-scores.component';

describe('FinalScoresComponent', () => {
  let component: FinalScoresComponent;
  let fixture: ComponentFixture<FinalScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalScoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
