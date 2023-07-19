import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent {
  successMsg: string | undefined;
  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any> = new Subject<any>();
  hideModel:boolean=true;
  investmentArray: any;
  constructor(private api:ApiService){ 
    this.getAllInvestment();
   }
   ngOnInit(){
    this.dtOptions={
      pagingType:'simple_numbers'
    }
   }
  getAllInvestment(){
    this.api.getAllInvestment().subscribe((res)=>{
      console.log(res);
      this.investmentArray = res.data;
      this.dtTrigger.next(null);
      return this.investmentArray;
    })  
  }
  removeInvestment(id:any){
    this.api.deleteInvestment(id).subscribe((res)=>{
      console.log(res);
      console.log("deleted");
      this.getAllInvestment();
    })
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
        setTimeout(() => {
          this.successMsg= " ";
        }, 1000);
        this.getAllInvestment();
        this.hideModel=false;
      })
    }

  }
  updateInvestment(){

  }
}
