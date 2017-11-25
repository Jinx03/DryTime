import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { NgSemanticModule } from "ng-semantic";
import { HttpClient } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  
  results: string = 'blep';
  body: string;
  

  source: Ng2SmartTableModule;

  data3 = [{
    "ssn": 1,
    "Name": "Nove is cancer",
    "Phone": "258-2563",
    "Office_num": 3,
    "Password": "password"
  }, {
    "ssn": 2,
    "Name": "Valla",
    "Phone": "12582",
    "Office_num": 1,
    "Password": "password123"
  }, {
    "ssn": 3,
    "Name": "Diablo",
    "Phone": "string",
    "Office_num": 2,
    "Password": "password321"
  }, {
    "ssn": 4,
    "Name": "Bob 2",
    "Phone": "5288268",
    "Office_num": 3,
    "Password": "password567"
  }, {
    "ssn": 5,
    "Name": "Jinx",
    "Phone": "25478",
    "Office_num": 1,
    "Password": "password69"
  }, {
    "ssn": 6,
    "Name": "Rengar",
    "Phone": "5248726",
    "Office_num": 2,
    "Password": "password999"
  }, {
    "ssn": 7,
    "Name": "Bob",
    "Phone": "5826",
    "Office_num": 3,
    "Password": "password125555"
  }];
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
  sortO: number = 1;
  
  sortF: string = '';
  
  settings = {
    columns: {
      VID: {
        title: 'ID'
      },
      Capacity: {
        title: 'Full Name'
      },
      Model: {
        title: 'User Name'
      },
      id: {
        title: 'Email'
      }
    }
  };
  data: string;//[{"VID":"string","Capacity":"string","Model":"string","id":1},{"VID":"string","Capacity":"string","Model":"string","id":2},{"VID":"string","Capacity":"string","Model":"string","id":3},{"VID":"string","Capacity":"string","Model":"string","id":4},{"VID":"string","Capacity":"string","Model":"string","id":5},{"VID":"string","Capacity":"string","Model":"string","id":6},{"VID":"string","Capacity":"string","Model":"string","id":7},{"VID":"string","Capacity":"string","Model":"string","id":8}];
  
  data2 = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    
    // ... list of items
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
  
  
  loading: boolean;
  
     // cars: Car[];
  
      
  
  constructor(private http: HttpClient, private employeeService: EmployeeServiceService) {
    this.source = new Ng2SmartTableModule;
    this.data = this.Vehicles;
  }

  onSubmit(f: NgForm) {
   console.log(f.value);  // { first: '', last: '' }
   this.body = f.value;
   console.log(this.body);
    console.log(f.valid);  // false
  }
  
  visible: boolean = true;
  updateVisibility(): void {
    this.visible = false;
    setTimeout(() => this.visible = true, 0);
  }

  
  
  getEmployees(): void {
    this.http.get('http://localhost:3000/api/Employees').subscribe(data => {
      this.results = JSON.stringify(data);
      console.log(this.results);
    });
  }


  log(){
    console.log(this.Employees);
    //console.log(this.data3);
    this.Employees = this.Employees.slice();
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


  postInitData(table: string, loc: string): void {
    this.http.post('http://localhost:3000/api/' + table, loc).subscribe(data => {
      this.results = JSON.stringify(data);
      console.log(this.results);
    });
  }



  getAllAction(table: string): void {
this.http.get('http://localhost:3000/api/' + table).subscribe(data => {
      this[table] = data;//JSON.stringify(data);
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

  send: any[];
  sendtwo: any[];
  sendthree: any[];
  sendfour: any[];
  sendfive: any[];
  sendsix: any[];
  sendseven: any[];
  sendeight: any[];
  sendnine: any[];
  sendten: any[];

  cols: any[];
  //eCols: any[];
  aCols: any[];
  asCols: any[];
  vCols: any[];
  wCols: any[];
  iCols: any[];
  isCols: any[];
  dCols: any[];
  tfCols: any[];
  jCols: any[];


  postInit()
  {
    this.send = [{
      "ssn": 123456789,
      "Name": "Branden Canny",
      "Phone": "601 - 754 - 3555",
      "Office_num": 1,
      "Password": "Cancan03"
    },{
      "ssn": 987654321,
      "Name": "Presley Canny",
      "Phone": "601-754-7184",
      "Office_num": 1,
      "Password": "Imadoggo3"
    }
  ];
 
    this.postInitData('Employees', this.send[0]);
    this.postInitData('Employees', this.send[1]);

    this.sendtwo = [{
      "IDN": "1d",
      "Model": "XXL",
      "Type": "Dehumidifier",
      "Brand": "Blue Dri",
      "Total": 2
    },
    
    
    {
      "IDN": "3d",
      "Model": "XL",
      "Type": "Dehumidifier",
      "Brand": "Blue Dri",
      "Total": 8
    },
    
    {
      "IDN": "11d",
      "Model": "XL",
      "Type": "Dehumidifier",
      "Brand": "Phoenix R125",
      "Total": 4
    },
    
    
    {
      "IDN": "15d",
      "Model": "XL",
      "Type": "Dehumidifier",
      "Brand": "Prieaz Evolution",
      "Total": 10
    },
    
    {
      "IDN": "1a",
      "Model": "Centrifugal Air Mover",
      "Type": "Air Mover",
      "Brand": "Blue Dri",
      "Total": 40
    },
    
    
    {
      "IDN": "41a",
      "Model": "Centrifugal Air Mover",
      "Type": "Air Mover",
      "Brand": "Grizzly",
      "Total": 20
    },
    
    
    {
      "IDN": "61a",
      "Model": "Centrifugal Air Mover",
      "Type": "Air Mover",
      "Brand": "Blue Dri",
      "Total": 60
    },
    
    {
      "IDN": "121a",
      "Model": "Low Pro Air Mover Radial",
      "Type": "Air Mover",
      "Brand": "Phoenix Evolution",
      "Total": 60
    }];

    this.sendthree = [
      {
        "IDN": "1d",
        "WID": "WID"
      },
      
      {
        "IDN": "1a",
        "WID": "WID"
      }];

      this.sendfour = [{
        "SSN": "123-45-6789",
        "SID": "1s",
        "IDN": "1d",
        "VID": "1v"
      }];
      this.sendfive = [{
        "SSN": "123-45-6789",
        "SID": "1s",
        "IDN": "1d",
        "VID": "1v"
      }];
      this.sendsix = [{
        "VID": "1v",
        "SID": "1s"
      }];
      this.sendseven = [{
        "SID": "1s",
        "Loc": "Brookhaven",
        "Type": "Water Damage",
        "Date": "Semptember 13, 2017"
      },
      
      {
        "SID": "2s",
        "Loc": "McComb",
        "Type": "Fire Damage",
        "Date": "December 15, 2016"
      }];

      this.sendeight = [{
        "WID": "1w",
        "VID": "1v"
      }];
      this.sendnine = [{
        "VID": "1v",
        "Capacity": "Empty",
        "Model": "Van"
      },
      
      {
        "VID": "1t",
        "Capacity": "Empty",
        "Model": "Truck"
      },
      
      {
        "VID": "1ct",
        "Capacity": "Empty",
        "Model": "Covered Trailer"
      },
      
      {
        "VID": "1ft",
        "Capacity": "Full",
        "Model": "Flatbed Trailer"
      }
      ];
      this.sendten = [{
        "WID": "1w",
        "Capacity": 100,
        "Loc": "Brookhaven"
      },
      
      {
        "WID": "2w",
        "Capacity": 0,
        "Loc": "Brookhaven"
      }];


    this.postInitData('Items', this.sendtwo[0]);
    this.postInitData('Items', this.sendtwo[1]);
    this.postInitData('Items', this.sendtwo[2]);
    this.postInitData('Items', this.sendtwo[3]);
    this.postInitData('Items', this.sendtwo[4]);
    this.postInitData('Items', this.sendtwo[5]);
    this.postInitData('Items', this.sendtwo[6]);
    this.postInitData('Items', this.sendtwo[7]);

    this.postInitData('Items_stored', this.sendthree[0]);
    this.postInitData('Items_stored', this.sendthree[1]);

    this.postInitData('Accesses', this.sendfour[0]);
    
    this.postInitData('Assigned_tos', this.sendfive[0]);
    
    this.postInitData('Doings', this.sendsix[0]);

    this.postInitData('Jobs', this.sendseven[0]);
    this.postInitData('Jobs', this.sendseven[1]);

    this.postInitData('Take_froms', this.sendeight[0]);

    this.postInitData('Vehicles', this.sendnine[0]);
    this.postInitData('Vehicles', this.sendnine[1]);
    this.postInitData('Vehicles', this.sendnine[2]);
    this.postInitData('Vehicles', this.sendnine[3]);

    this.postInitData('Warehouses', this.sendten[0]);
    this.postInitData('Warehouses', this.sendten[1]);

  }

 
  changeSort(event) {
    if (!event.order) {
      this.sortF = 'year';
    } else {
      this.sortF = event.field;
    }
}

  ngOnInit() {
    this.loading = true;
    this.getAll();
    setTimeout(() => {
        //this.getAll();
        
        this.loading = false;
    }, 1000);



    
    this.cols = [
      {field: 'ssn', header: 'SSN'},
      {field: 'Name', header: 'Name'},
      {field: 'Phone', header: 'Phone #'},
      {field: 'Office_num', header: 'Office #'},
      {field: 'Password', header: 'Password'}
  ];

  this.vCols = [
    {field: 'VID', header: 'VID'},
    {field: 'Capacity', header: 'Capacity'},
    {field: 'Model', header: 'Model #'},
    {field: 'id', header: 'ID #'}
];

this.iCols = [
  {field: 'IDN', header: 'IDN'},
  {field: 'Model', header: 'Model'},
  {field: 'Type', header: 'Type'},
  {field: 'Brand', header: 'Brand'},
  {field: 'Total', header: 'Total'},
  {field: 'id', header: 'ID #'}
];

this.isCols = [
  {field: 'IDN', header: 'IDN'},
  {field: 'WID', header: 'Warehouse ID'},
  {field: 'id', header: 'ID #'}
];

this.aCols = [
  {field: 'SSN', header: 'SSN #'},
  {field: 'SID', header: 'Site ID'},
  {field: 'IDN', header: 'IDN'},
  {field: 'VID', header: 'Vehicle ID'},
  {field: 'id', header: 'ID #'}
];

this.asCols = [
  {field: 'SSN', header: 'SSN #'},
  {field: 'SID', header: 'Site ID'},
  {field: 'IDN', header: 'IDN'},
  {field: 'VID', header: 'Vehicle ID'},
  {field: 'id', header: 'ID #'}
];

this.dCols = [
  {field: 'VID', header: 'Vehicle ID'},
  {field: 'SID', header: 'Site ID'},
  {field: 'id', header: 'ID #'}
];

this.jCols = [
  {field: 'SID', header: 'Site ID'},
  {field: 'Loc', header: 'Location'},
  {field: 'Type', header: 'Type'},
  {field: 'Date', header: 'Date'},
  {field: 'id', header: 'ID #'}
];

this.tfCols = [
  {field: 'WID', header: 'Warehouse ID'},
  {field: 'VID', header: 'Vehicle ID'},
  {field: 'id', header: 'ID #'}
];

this.wCols = [
  {field: 'WID', header: 'Warehouse ID'},
  {field: 'Capacity', header: 'Capacity'},
  {field: 'Loc', header: 'Location'},
  {field: 'id', header: 'ID #'}
];

}

}
