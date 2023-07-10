import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExpenseComponent } from './process/edit/edit-expense/edit-expense.component';
import { EditInvestmentCategoryComponent } from './process/edit/edit-investment-category/edit-investment-category.component';
import { EditInvestmentComponent } from './process/edit/edit-investment/edit-investment.component';
import { EditPassiveComponent } from './process/edit/edit-passive/edit-passive.component';
import { EditSalaryComponent } from './process/edit/edit-salary/edit-salary.component';
import { EditUserProfileComponent } from './process/edit/edit-user-profile/edit-user-profile.component';
import { ExpenseComponent } from './process/expense/expense.component';
import { InvestmentCategoryComponent } from './process/investment-category/investment-category.component';
import { InvestmentComponent } from './process/investment/investment.component';
import { MenuComponent } from './process/menu/menu.component';
import { PassiveComponent } from './process/passive/passive.component';
import { SalaryComponent } from './process/salary/salary.component';
import { UserProfileComponent } from './process/user-profile/user-profile.component';

const routes: Routes = [
  // {path :'main',component:MainComponent, outlet:'main',
  // children: [
  { path: '', component: MenuComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'investment', component: InvestmentComponent },
  { path: 'category', component: InvestmentCategoryComponent },
  { path: 'salary', component: SalaryComponent },
  { path: 'passive', component: PassiveComponent },
  { path: 'profile', component:  UserProfileComponent},
  { path: 'expense/edit/:id', component:  EditExpenseComponent},
  { path: 'investment/edit/:id', component:  EditInvestmentComponent},
  { path: 'category/edit/:id', component:  EditInvestmentCategoryComponent},
  { path: 'salary/edit/:id', component:  EditSalaryComponent},
  { path: 'passive/edit/:id', component:  EditPassiveComponent},
  { path: 'profile/edit/:id', component:  EditUserProfileComponent}
  
]
// }
// ]; // sets up routes constant

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
