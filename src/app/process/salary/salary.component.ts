import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent {
  salaryArray: any;
  constructor(private api:ApiService){ 
    this.getAllSalary();
   }
   getAllSalary(){
    this.api.getAllSalary().subscribe((res)=>{
      console.log(res);
      this.salaryArray = res.data;
      
      return this.salaryArray;
    })  
}
}
