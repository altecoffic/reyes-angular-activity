import { Component, Output, EventEmitter } from '@angular/core';
import { Device } from './models';


@Component({
  selector: 'app-root',
  template: `
   {{title}}
  <br><br>
  Count: {{counter}}   <br><br>
  <button (click)="addClick()">Add Count</button><br>
  <button (click)="subClick()">Sub Count</button> <br>
  <div *ngIf ="counter==6"> <p> second works! </p>
  </div>`,
  styles: ['p {color:red}']
})

export class AppComponent {

  @Output() firstEvent: EventEmitter<any> = new EventEmitter();
  title = 'This is my first Angular component';

  public counter: number = 0;


  addClick() {
    this.counter += 1;
  }
  subClick() {
    this.counter -= 1;
  }

  // device : Device = {
  //   name: "cath",
  //   brand : "dell",
  //   model : "ferrari"
  // }

  // devices : Device []= [
  //   {
  //     name: "Device01",
  //     brand: "Dell",
  //     model: "Latitude 120"
  //   },
  //   {
  //     name: "Device02",
  //     brand: "HP",
  //     model: "Pavillion"
  //   }

  // ]

}


  // appMessage = "This is for input parameter";

  // appMessageArray = ['hi', 'hello', 'goodbye', 'go', 'stop', 'please'];

  // countNum= ['1','2','3','4','5'];

  // appEvent(event:any){
  //   alert(event);
  // }
  // add() {
  //   this.showComponent = !this.showComponent;

  // }
  // sub() {
  //   this.showComponent = !this.showComponent;

  // }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   //title = 'angular-reyes-project';
//   title = 'My first Angular component';
//   appMessage = "_______";


//   appEvent(event: any) {
//     console.log(event);
//     this.appMessage = event;
//   }
// }
