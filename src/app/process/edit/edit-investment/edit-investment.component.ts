import { Component } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-investment',
  templateUrl: './edit-investment.component.html',
  styleUrls: ['./edit-investment.component.css']
})
export class EditInvestmentComponent {
  getparamsid:any;
  ngOnInit():void{
    this.getparamsid = this.route.snapshot.paramMap.get('id');
    console.log(this.getparamsid);
    if (this.getparamsid) {
      this.api.singleInvestment(this.getparamsid).subscribe((res) => {
        console.log(res.data);
        this.investmentForm.patchValue({
          iid: res.data[0].iid,
          uid: res.data[0].uid,
          idate: res.data[0].idate,
          iamount: res.data[0].iamount,
          iremarks: res.data[0].iremarks
        });
      });
    }
  }
  constructor(private api: ApiService, private route: ActivatedRoute,private fb:FormBuilder) {}


  investmentForm = new FormGroup({
    iid:new FormControl('',[Validators.required]),
    uid:new FormControl('',[Validators.required]),
    idate:new FormControl('',[Validators.required]),
    iamount:new FormControl('',[Validators.required]),
    iremarks:new FormControl('',[Validators.required]),
  })

  submitInvestment(){
    if(this.investmentForm.status == 'VALID'){
      this.api.updateInvestment(this.investmentForm.value, this.getparamsid).subscribe((res)=>{
        console.log(res, "updated investment");
      })
    }
  }
}
