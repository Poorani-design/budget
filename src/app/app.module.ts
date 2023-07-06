import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExpenseComponent } from './process/expense/expense.component';
import { InvestmentComponent } from './process/investment/investment.component';
import { InvestmentCategoryComponent } from './process/investment-category/investment-category.component';
import { PassiveComponent } from './process/passive/passive.component';
import { SalaryComponent } from './process/salary/salary.component';
import { UserProfileComponent } from './process/user-profile/user-profile.component';
import { AsideComponent } from './aside/aside.component';
import { MenuComponent } from './process/menu/menu.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ViewInvestmentComponent } from './process/view/view-investment/view-investment.component';
import { ViewInvestmentCategoryComponent } from './process/view/view-investment-category/view-investment-category.component';
import { ViewSalaryComponent } from './process/view/view-salary/view-salary.component';
import { ViewPassiveComponent } from './process/view/view-passive/view-passive.component';
import { ViewProfileComponent } from './process/view/view-profile/view-profile.component';
import { ViewExpenseComponent } from './process/view/view-expense/view-expense.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ExpenseComponent,
    InvestmentComponent,
    InvestmentCategoryComponent,
    PassiveComponent,
    SalaryComponent,
    UserProfileComponent,
    AsideComponent,
    MenuComponent,
    ViewInvestmentComponent,
    ViewInvestmentCategoryComponent,
    ViewSalaryComponent,
    ViewPassiveComponent,
    ViewProfileComponent,
    ViewExpenseComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
