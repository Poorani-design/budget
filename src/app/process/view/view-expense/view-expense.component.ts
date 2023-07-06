import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css'],
})
export class ViewExpenseComponent {

  getParamid: any;

  ngOnInit():void{
    this.getParamid = this.route.snapshot.paramMap.get('id');
    console.log(this.getParamid);
    if(this.getParamid){
      this.api.singleExpense(this.getParamid).subscribe((res)=>{
        console.log(res.data);
        this.expenseForm.patchValue({
          edate:res.data[0].edate,
          eamount:res.data[0].eamount,
          ename:res.data[0].ename,
          eremarks:res.data[0].eremarks,

        })
      })
    }
  
  }
  constructor(private api:ApiService,private route: ActivatedRoute){

  }
  expenseForm = new FormGroup({
    edate:new FormControl('',[Validators.required]),
    eamount:new FormControl('',[Validators.required]),
    ename:new FormControl('',[Validators.required]),
    eremarks:new FormControl('',[Validators.required])
  });
}
