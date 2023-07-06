import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent {
  investmentArray: any;
  constructor(private api:ApiService){ 
    this.getAllInvestment();
   }
  getAllInvestment(){
    this.api.getAllInvestment().subscribe((res)=>{
      console.log(res);
      this.investmentArray = res.data;
      
      return this.investmentArray;
    })  
  }
}
