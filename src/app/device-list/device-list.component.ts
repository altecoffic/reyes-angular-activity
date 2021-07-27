import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from './../models';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  constructor(
    private router: Router,
    private deviceService: DeviceService
    ) { }

  ngOnInit(): void {
    this.devices = this.deviceService.getDevices();
  }
  devices: Device[] = [];
  // devices: Device[] = [
  //   {
  //     id:1,
  //     name: "Device01",
  //     brand: "Dell",
  //     model: "Latitude 120",
  //     year: 2019,
  //     serial: " M3M0R13S"
  //   },
  //   {
  //     id:2,
  //     name: "Device02",
  //     brand: "HP",
  //     model: "Pavillion",
  //     year: 2020,
  //     serial: "1L0V3U" 
  //   }
  // ]

  addDevice(){
    this.router.navigate(['/add']);
    // this.isShow=!this.isShow;
    // this.onClick = !this.onClick;
   
  }
}