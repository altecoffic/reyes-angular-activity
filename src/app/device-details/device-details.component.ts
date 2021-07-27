// Activity 5
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '../models';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  @Input() deviceDetail: Device;
  
  @Output() updateDetail = new EventEmitter();
  

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  update(){
    this.route.navigate(['/update'])
    // this.updateDetail.emit(id);
  }
}