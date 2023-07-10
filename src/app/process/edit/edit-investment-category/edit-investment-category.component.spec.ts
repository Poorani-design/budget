import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInvestmentCategoryComponent } from './edit-investment-category.component';

describe('EditInvestmentCategoryComponent', () => {
  let component: EditInvestmentCategoryComponent;
  let fixture: ComponentFixture<EditInvestmentCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditInvestmentCategoryComponent]
    });
    fixture = TestBed.createComponent(EditInvestmentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
