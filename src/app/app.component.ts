// Activity 5
import { Component } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'My first Angular component';
  devices : Device []= [
    {
      name: "Device01",
      brand: "Dell",
      model: "Latitude 120",
      year: 2019,
      serial:" M3M0R13S"

    },
    {
      name: "Device02",
      brand: "HP",
      model: "Pavillion",
      year: 2020,
      serial: "1L0V3U"

    },
    {
      name: "Device03",
      brand: "MacBook Pro",
      model: "MacBookPro17,1",
      year: 2021,
      serial: "W88401231AX"
      
    }

  ]



  // title = 'angular-g1-project';
 
  // appMessage = "This is for input parameter";

  // appMessageArray = ['hi', 'hello', 'goodbye', 'go', 'stop', 'please'];

  // showComponent = true;

  // appEvent(event){
  //   alert(event);
  // }

  // showHide() {
  //   this.showComponent = !this.showComponent;
  // }



}