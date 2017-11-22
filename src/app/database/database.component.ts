import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { NgSemanticModule } from "ng-semantic";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  
  results: string;
  body: string;
  
  
  
  id: number = 1;

  //getAll() stores the full tables in these variables when called.
  Employees: string;
  Accesses: string;
  Assigned_tos: string;
  Doings: string;
  Items: string;
  Items_stored: string;
  Jobs: string;
  Take_froms: string;
  Vehicles: string;
  Warehouses: string;
  
  

  
  constructor(private http: HttpClient) {}

  onSubmit(f: NgForm) {
   console.log(f.value);  // { first: '', last: '' }
   this.body = f.value;
   console.log(this.body);
    console.log(f.valid);  // false
  }
  

  
  getEmployees(): void {
    this.http.get('http://localhost:3000/api/Employees').subscribe(data => {
      this.results = JSON.stringify(data);
      console.log(this.results);
    });
  }


  getEmployeeById(): void {
    this.http.get('http://localhost:3000/api/Employees/' + this.id).subscribe(data => {
      this.results = JSON.stringify(data);
      console.log(this.results);
    });
  }

  postEmployee(): void {
    this.http.post('http://localhost:3000/api/Employees', this.body).subscribe(data => {
      this.results = JSON.stringify(data);
      console.log(this.results);
    });
  }



  getAllAction(table: string): void {
this.http.get('http://localhost:3000/api/' + table).subscribe(data => {
      this[table] = JSON.stringify(data);
    });
  }
  
  getAll(){
   this.getAllAction('Employees');
   this.getAllAction('Accesses');
   this.getAllAction('Assigned_tos');
   this.getAllAction('Doings');
   this.getAllAction('Items');
   this.getAllAction('Items_stored');
   this.getAllAction('Jobs');
   this.getAllAction('Take_froms');
   this.getAllAction('Vehicles');
   this.getAllAction('Warehouses');
   
  
  }

 


  ngOnInit() {
  }

}
