import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css'],
})
export class EditExpenseComponent {
  getParamid: any;
  ngOnInit(): void {
    this.getParamid = this.route.snapshot.paramMap.get('id');
    console.log(this.getParamid);
    if (this.getParamid) {
      this.api.singleExpense(this.getParamid).subscribe((res) => {
        console.log(res.data);
        this.expenseForm.patchValue({
          edate: res.data[0].edate,
          eamount: res.data[0].eamount,
          // expense:this.fb.array([this.createExpense()],Validators.required),
          eremarks: res.data[0].eremarks,
        });
      });
    }
  }
  constructor(private api: ApiService, private route: ActivatedRoute,private fb:FormBuilder) {}

  get expense():FormArray{
    return <FormArray>this.expenseForm.get('expense');
  }

  addExpense(){
    this.expense.push(this.createExpense());
  }
  createExpense():FormGroup{
    return this.fb.group({
      ename:[null,Validators.required],
      eprice:[null,Validators.required],
      itemremark:[null,Validators.required],
    })
  }
  expenseForm = new FormGroup({
    edate: new FormControl('', [Validators.required]),    
    eamount: new FormControl('', [Validators.required]),    
    expense:this.fb.array([this.createExpense()],Validators.required),
    eremarks: new FormControl('', [Validators.required]),
  });
  submitExpense(){
    if(this.expenseForm.status=='VALID'){
      console.log(this.expenseForm.value);
      console.log(this.expenseForm.value.expense);
      this.api.updateExpense(this.expenseForm.value,this.getParamid).subscribe((res)=>{
        console.log(res,"updated success");
        
      })

    }
  }
}
