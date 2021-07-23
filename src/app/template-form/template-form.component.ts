import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
//import { formatCurrency } from '@angular/common';
import { NgForm } from '@angular/forms';
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

  constructor() { }

  ngOnInit(): void {
  }

  addDevice(form: NgForm){
    this.deviceDetail.emit(form.value);
    console.log(form.value);
  }
  // submit(login:any){
  //   console.log('submitted',login);
  // }
}
