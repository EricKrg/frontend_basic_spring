import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeRoute } from './employee/employee.route.module';
import { ListComponent } from './employee/list/list.component';
import { EmployService } from './employ.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    EmployeeRoute,
    HttpClientModule
    
  ],
  providers: [EmployService],
  bootstrap: [AppComponent]
})
export class AppModule { }
