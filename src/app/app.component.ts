import { Component } from '@angular/core';
import { Hero } from './hero';
import { EmployeeAddService } from './employee-add.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private employeeAddService:EmployeeAddService){

  }
  title = 'simpleDropDown';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
  getString(){
    console.log("getstring");
    let vcrNumber="12345"
    this.employeeAddService.getEmployee(vcrNumber);
  }
  
}
