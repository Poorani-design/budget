import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPassiveComponent } from './view-passive.component';

describe('ViewPassiveComponent', () => {
  let component: ViewPassiveComponent;
  let fixture: ComponentFixture<ViewPassiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPassiveComponent]
    });
    fixture = TestBed.createComponent(ViewPassiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
