import { Injectable } from '@angular/core';
import { Device } from './models';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  devices : Device []= [
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

  constructor() { }

  getDevices(){
    return this.devices;
  }

  addDevice(device: Device){
    this.devices.push(device);
    console.log(this.devices);
    
  }
}