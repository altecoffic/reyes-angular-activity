//Activity 7
import { Component,Input,Output,EventEmitter} from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title="My First Angular component";

   showUpdate = false;
   selectedDevice:any;
  constructor() { }
  devices: Device[] = [
    {
      id:1,
      name: "Device01",
      brand: "Dell",
      model: "Latitude 120",
      year: 2019,
      serial: " M3M0R13S"
    },
    {
      id:2,
      name: "Device02",
      brand: "HP",
      model: "Pavillion",
      year: 2020,
      serial: "1L0V3U" 
    }
  ]

  addDevice(device: Device) {
   
    this.devices.push(device);
    console.log(device);
  }
  updateDevice(deviceId: number) {
   this.showUpdate = true;
   this.selectedDevice = this.devices.find(device => device.id == deviceId)
  }
  updateDisplay(updatedDevice:Device){
    this.showUpdate = false;
    let ndx = this.devices.findIndex(device => device.id === updatedDevice.id);
    this.devices[ndx] = updatedDevice;
  }
}


// Activity 5
// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { Device } from './models';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit{
//   appEvent = new EventEmitter;
//   @Output() deviceDetails = new EventEmitter();
//   constructor() { }
//   ngOnInit(): void { }
//   title = 'Device Detail View';

//   devices: Device[] = [
//     {
//       name: "Device01",
//       brand: "Dell",
//       model: "Latitude 120",
//       year: 2019,
//       serial: " M3M0R13S"

//     },
//     {
//       name: "Device02",
//       brand: "HP",
//       model: "Pavillion",
//       year: 2020,
//       serial: "1L0V3U" 

//     }

//   ]

//   addDevice(device: Device) {
//     this.devices.push(device as Device);
//   }
//   update(){
    
//   }

// }

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



