import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getAllPassive() {
    throw new Error('Method not implemented.');
  }
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    console.log(this.apiUrl);
  }

  // get all expense
  getAllExpense(): Observable<any> {
    return this.http.get(`${this.apiUrl}/expense`);
  }
  //get single expense data
  singleExpense(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/expense/${id}`);
  }

  //get all investment
  getAllInvestment(): Observable<any> {
    return this.http.get(`${this.apiUrl}/investment`);
  }

  //get all passive income
  getAllInvestmentCategory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/investmentCategory`);
  }

  //get all passive income
  getAllPassiveIncome(): Observable<any> {
    return this.http.get(`${this.apiUrl}/passive`);
  }
  //get all salary
  getAllSalary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/salary`);
  }

  

  
}
