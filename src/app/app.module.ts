import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgSemanticModule } from "ng-semantic";
import { NgModel } from '@angular/forms';


import { FormsModule, ReactiveFormsModule }   from '@angular/forms';




import { AppComponent } from './app.component';
import { CreatepollComponent } from './createpoll/createpoll.component';
import {HttpClientModule} from '@angular/common/http';
import { DatabaseComponent } from './database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatepollComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSidenavModule,
    NoopAnimationsModule,
    NgSemanticModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
