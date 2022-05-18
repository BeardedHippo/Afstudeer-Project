import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayGroupnameComponent } from './overlay-groupname.component';

describe('OverlayGroupnameComponent', () => {
  let component: OverlayGroupnameComponent;
  let fixture: ComponentFixture<OverlayGroupnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayGroupnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayGroupnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
