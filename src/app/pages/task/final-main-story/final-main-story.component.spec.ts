import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalMainStoryComponent } from './final-main-story.component';

describe('FinalMainStoryComponent', () => {
  let component: FinalMainStoryComponent;
  let fixture: ComponentFixture<FinalMainStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalMainStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalMainStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
