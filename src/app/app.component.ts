import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angular-reyes-project';
  title = 'My first Angular component';
  appMessage = "_______";

  appEvent(event: any) {
    console.log(event);
    this.appMessage = event;
  }
}
