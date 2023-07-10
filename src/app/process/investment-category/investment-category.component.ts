import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-investment-category',
  templateUrl: './investment-category.component.html',
  styleUrls: ['./investment-category.component.css']
})
export class InvestmentCategoryComponent {
  investmentCategoryArray: any;
  constructor(private api:ApiService,
    //  private route:RouterLink
     ){ 
    this.getAllInvestment_C();
   }
   getAllInvestment_C(){
    this.api.getAllInvestmentCategory().subscribe((res)=>{
      console.log(res);
      this.investmentCategoryArray = res.data;
      
      return this.investmentCategoryArray;
    })  
  }
  
}
