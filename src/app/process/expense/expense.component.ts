import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {
  expenseArray: any;
  constructor(private api:ApiService){
    this.getAllExpenseData();
  }
  getAllExpenseData(){
    this.api.getAllExpense().subscribe((res)=>{
      console.log(res);
      console.log(res.data[0].expense)
      this.expenseArray = res.data;
      
      return this.expenseArray;
    })  
  }
}
