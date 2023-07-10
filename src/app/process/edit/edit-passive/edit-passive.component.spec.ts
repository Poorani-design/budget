import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPassiveComponent } from './edit-passive.component';

describe('EditPassiveComponent', () => {
  let component: EditPassiveComponent;
  let fixture: ComponentFixture<EditPassiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPassiveComponent]
    });
    fixture = TestBed.createComponent(EditPassiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
