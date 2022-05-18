import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryOptionComponent } from './story-option.component';

describe('StoryOptionComponent', () => {
  let component: StoryOptionComponent;
  let fixture: ComponentFixture<StoryOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
