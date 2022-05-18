import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceStoryComponent } from './choice-story.component';

describe('ChoiceStoryComponent', () => {
  let component: ChoiceStoryComponent;
  let fixture: ComponentFixture<ChoiceStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoiceStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
