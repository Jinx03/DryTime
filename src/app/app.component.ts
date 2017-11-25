import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import {DatabaseComponent} from './database/database.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DryTime';

  //items = ["1", "2", "3", "4"];
  items = [{
    "title": 'Employees',
    "icon": ""
  }, {
    "title": 'Next Thing',
    "icon": ""
  }];

}

