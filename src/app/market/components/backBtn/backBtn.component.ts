import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'back-btn',
  templateUrl: 'backBtn.component.html',
  providers: [Location]
})

export class BackBtnComponent {
  private location: Location;

  constructor(locationService: Location) {
    this.location = locationService;
  }

  goBack() {
    this.location.back();
  }
}
