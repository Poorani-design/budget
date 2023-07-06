import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-passive',
  templateUrl: './passive.component.html',
  styleUrls: ['./passive.component.css']
})
export class PassiveComponent {
  passiveArray: any;
  constructor(private api:ApiService){ 
    this.getAllPassive();
   }
   getAllPassive(){
    this.api.getAllPassiveIncome().subscribe((res)=>{
      console.log(res);
      this.passiveArray = res.data;
      
      return this.passiveArray;
    })  
  }
}
