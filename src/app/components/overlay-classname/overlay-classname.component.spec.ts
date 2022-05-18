import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayClassnameComponent } from './overlay-classname.component';

describe('OverlayClassnameComponent', () => {
  let component: OverlayClassnameComponent;
  let fixture: ComponentFixture<OverlayClassnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayClassnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayClassnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
