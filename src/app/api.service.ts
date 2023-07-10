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
  //======================================= EXPENSE START HERE ======================
  // get all expense
  getAllExpense(): Observable<any> {
    return this.http.get(`${this.apiUrl}/expense`);
  }
  //get single expense data
  singleExpense(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/expense/${id}`);
  }
  //update expense data
  updateExpense(data: any, id: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/expense/update/${id}`, data);
  }
  //delete expense data
  deleteExpense(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/expense/delete/${id}`);
  }
  //=================================== EXPENSE END HERE ============================
  //=================================== INVESTMENT STARTS HERE ======================
  //get all investment
  getAllInvestment(): Observable<any> {
    return this.http.get(`${this.apiUrl}/investment`);
  }
  //get single investment data
  singleInvestment(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/investment/${id}`);
  }
  //update investment data
  updateInvestment(data: any, id: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/investment/update/${id}`, data);
  }

  //==================================== INVESTMENT END HERE =======================

  //==================================== PASSIVE START HERE =======================
  //get all passive income
  getAllPassiveIncome(): Observable<any> {
    return this.http.get(`${this.apiUrl}/passive`);
  }

  //get single passive data
  singlePassive(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/passive/${id}`);
  }
  //update passive data
  updatePassive(data: any, id: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/passive/update/${id}`, data);
  }

  //==================================== PASSIVE END HERE =======================
  //==================================== investment category START HERE =======================
  //get all investment category income
  getAllInvestmentCategory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/investmentCategory`);
  }

    //get single passive data
    singleInvestmentCategory(id: any): Observable<any> {
      return this.http.get(`${this.apiUrl}/investment_category/${id}`);
    }
    //update investmentCategory data
    updateInvestmentCategory(data: any, id: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/investment_category/update/${id}`, data);
    }

  //==================================== investment category END HERE =======================
  //get all salary
  getAllSalary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/salary`);
  }
}
