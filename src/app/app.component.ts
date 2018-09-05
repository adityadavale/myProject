import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';

  captureChildEvents = function (eventData) {
    console.log(`----------------------event data ------------- \n ${eventData}`)
  }
}
