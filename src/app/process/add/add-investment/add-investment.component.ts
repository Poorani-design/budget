import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.css']
})
export class AddInvestmentComponent {
  successMsg: string | undefined;
  constructor(public api:ApiService){
    
  }
  investmentForm = new FormGroup({
    icid:new FormControl('',[Validators.required]),
    uid:new FormControl('',[Validators.required]),
    idate:new FormControl('',[Validators.required]),
    iamount:new FormControl('',[Validators.required]),
    iremarks:new FormControl('')
  });
  addInvestment(){
    if(this.investmentForm.valid){
      this.api.addInvestment(this.investmentForm.value).subscribe((res)=>{
        console.log("Data added success", JSON.stringify(res));
        this.investmentForm.reset();
        this.successMsg="Investment added successfully !";
        
      })
    }

  }
  updateInvestment(){

  }
}
