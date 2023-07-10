import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-passive',
  templateUrl: './edit-passive.component.html',
  styleUrls: ['./edit-passive.component.css']
})
export class EditPassiveComponent {
  getparamsid:any;
  ngOnInit():void{
    this.getparamsid = this.route.snapshot.paramMap.get('id');
    console.log(this.getparamsid);
    if (this.getparamsid) {
      this.api.singlePassive(this.getparamsid).subscribe((res) => {
        console.log(res.data);
        this.passiveForm.patchValue({
          pid: res.data[0].pid,
          uid: res.data[0].uid,
          pname: res.data[0].pname,
          pcompany: res.data[0].pcompany,
          pamount:res.data[0].pamount,
          pdate: res.data[0].pdate,
          premarks: res.data[0].premarks,

        });
      });
    }
  }
  constructor(private api: ApiService, private route: ActivatedRoute,private fb:FormBuilder) {}

  passiveForm = new FormGroup({
    pid:new FormControl('',[Validators.required]),
    uid:new FormControl('',[Validators.required]),
    pname:new FormControl('',[Validators.required]),
    pcompany:new FormControl('',[Validators.required]),
    pamount:new FormControl('',[Validators.required]),
    pdate:new FormControl('',[Validators.required]),

    premarks:new FormControl('',[Validators.required]),
  })

  submitPassive(){
    if(this.passiveForm.status == 'VALID'){
      this.api.updatePassive(this.passiveForm.value, this.getparamsid).subscribe((res)=>{
        console.log(res);
        console.log(res, "updated passive income");
      })
    }
  }
}
