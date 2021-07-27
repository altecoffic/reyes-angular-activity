import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
//import { formatCurrency } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from '../device.service';

// import { Device } from './../models';
// import { DeviceDetailsComponent } from '../device-details/device-details.component';
// import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @Output() deviceDetail = new EventEmitter();


  constructor(
    private router: Router,
    private deviceService: DeviceService
    ) { }

  ngOnInit(): void {
  }

  goToList(){
    this.router.navigate(['/deviceList']);
  }
  addDevice(form: NgForm){ 
    this.deviceService.addDevice(form.value);
    this.router.navigate(['/deviceList']);
    // this.deviceDetail.emit(form.value);
    
   
  }
  
}
