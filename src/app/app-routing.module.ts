import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseComponent } from './process/expense/expense.component';
import { InvestmentCategoryComponent } from './process/investment-category/investment-category.component';
import { InvestmentComponent } from './process/investment/investment.component';
import { MenuComponent } from './process/menu/menu.component';
import { PassiveComponent } from './process/passive/passive.component';
import { SalaryComponent } from './process/salary/salary.component';
import { UserProfileComponent } from './process/user-profile/user-profile.component';
import { ViewExpenseComponent } from './process/view/view-expense/view-expense.component';
import { ViewInvestmentCategoryComponent } from './process/view/view-investment-category/view-investment-category.component';
import { ViewInvestmentComponent } from './process/view/view-investment/view-investment.component';
import { ViewPassiveComponent } from './process/view/view-passive/view-passive.component';
import { ViewProfileComponent } from './process/view/view-profile/view-profile.component';
import { ViewSalaryComponent } from './process/view/view-salary/view-salary.component';


const routes: Routes = [
  // {path :'main',component:MainComponent, outlet:'main',
  // children: [
  { path: '', component: MenuComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'investment', component: InvestmentComponent },
  { path: 'investment_category', component: InvestmentCategoryComponent },
  { path: 'salary', component: SalaryComponent },
  { path: 'passive', component: PassiveComponent },
  { path: 'profile', component:  UserProfileComponent},
  { path: 'expense/view/:id', component:  ViewExpenseComponent},
  { path: 'investment/view/:id', component:  ViewInvestmentComponent},
  { path: 'investment_category/view/:id', component:  ViewInvestmentCategoryComponent},
  { path: 'salary/view/:id', component:  ViewSalaryComponent},
  { path: 'passive/view/:id', component:  ViewPassiveComponent},
  { path: 'profile/view/:id', component:  ViewProfileComponent}
  
]
// }
// ]; // sets up routes constant

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
