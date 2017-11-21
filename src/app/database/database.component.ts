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

  constructor() { }

  ngOnInit() {
  }

}
