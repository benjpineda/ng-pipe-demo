import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor() {}

  // Add the showTodayDate method
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }

  // Add a service property
  serviceproperty = 'My Service Component';
}
