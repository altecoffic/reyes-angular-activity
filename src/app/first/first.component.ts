// import { Component, OnInit, Input} from '@angular/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  visible: any = true;
  @Output() firstEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent() {
    this.visible = !this.visible;
    this.firstEvent.emit(!this.visible ? "new message" : "_____");

  }

}
