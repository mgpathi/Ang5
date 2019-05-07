import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeAddService } from './employee-add.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,HttpClientModule
  ],
  providers: [EmployeeAddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
