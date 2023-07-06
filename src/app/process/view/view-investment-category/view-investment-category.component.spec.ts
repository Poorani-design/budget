import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInvestmentCategoryComponent } from './view-investment-category.component';

describe('ViewInvestmentCategoryComponent', () => {
  let component: ViewInvestmentCategoryComponent;
  let fixture: ComponentFixture<ViewInvestmentCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewInvestmentCategoryComponent]
    });
    fixture = TestBed.createComponent(ViewInvestmentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
