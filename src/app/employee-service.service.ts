import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import {Observable} from 'rxjs/Observable'

import {Employees} from './employee';
import {DatabaseComponent} from './database/database.component';


@Injectable()
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }
  results: string;

 


  getEmployees() {
  return this.http.get<Employees>('http://localhost:3000/api/Employees')
  .subscribe(data => {
    this.results = JSON.stringify(data);
    console.log(this.results);
  });
}

getEmployeesTwo() {
  return this.http.get<Employees>('http://localhost:3000/api/Employees')
  .map(response => JSON.stringify(response))
  .subscribe(result => this.results =result);
  
}



}
  

