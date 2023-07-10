import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-investment-category',
  templateUrl: './edit-investment-category.component.html',
  styleUrls: ['./edit-investment-category.component.css']
})
export class EditInvestmentCategoryComponent {
  getparamsid:any;
  ngOnInit():void{
    this.getparamsid = this.route.snapshot.paramMap.get('id');
    console.log(this.getparamsid);
    if (this.getparamsid) {
      this.api.singleInvestmentCategory(this.getparamsid).subscribe((res) => {
        console.log(res.data);
        this.investmentCategoryForm.patchValue({
          icid: res.data[0].icid,
          uid: res.data[0].uid,
          iname: res.data[0].iname,
          istartdate: res.data[0].istartdate,
          ienddate: res.data[0].ienddate,
          iperiod: res.data[0].iperiod
        });
      });
    }
  }
  constructor(private api: ApiService, private route: ActivatedRoute,private fb:FormBuilder) {}

  investmentCategoryForm = new FormGroup({
    icid:new FormControl('',[Validators.required]),
    uid:new FormControl('',[Validators.required]),
    iname:new FormControl('',[Validators.required]),
    istartdate:new FormControl('',[Validators.required]),
    ienddate:new FormControl('',[Validators.required]),
    iperiod:new FormControl('',[Validators.required]),
  })

  submitInvestmentCategory(){
    if(this.investmentCategoryForm.status == 'VALID'){
      this.api.updateInvestmentCategory(this.investmentCategoryForm.value, this.getparamsid).subscribe((res)=>{
        console.log(res, "updated investment category");
      })
    }
  }
}
