import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service'; // Import the service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todaydate: any;

  constructor(private myservice: MyserviceService) {
    // Use the service method to fetch today's date
    this.todaydate = this.myservice.showTodayDate();
  }
}
