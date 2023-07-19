import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { EditExpenseComponent } from './process/edit/edit-expense/edit-expense.component';
import { EditInvestmentComponent } from './process/edit/edit-investment/edit-investment.component';
import { EditInvestmentCategoryComponent } from './process/edit/edit-investment-category/edit-investment-category.component';
import { EditPassiveComponent } from './process/edit/edit-passive/edit-passive.component';
import { EditSalaryComponent } from './process/edit/edit-salary/edit-salary.component';
import { EditUserProfileComponent } from './process/edit/edit-user-profile/edit-user-profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddExpenseComponent } from './process/add/add-expense/add-expense.component';
import { AddInvestmentComponent } from './process/add/add-investment/add-investment.component';
import {DataTablesModule} from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ExpenseComponent,
    InvestmentComponent,
    InvestmentCategoryComponent,
    PassiveComponent,
    SalaryComponent,
    UserProfileComponent,
    AsideComponent,
    MenuComponent,
    EditExpenseComponent,
    EditInvestmentComponent,
    EditInvestmentCategoryComponent,
    EditPassiveComponent,
    EditSalaryComponent,
    EditUserProfileComponent,
    AboutusComponent,
    AddExpenseComponent,
    AddInvestmentComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    DataTablesModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
