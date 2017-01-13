import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'visa-types-tabs',
  templateUrl: 'visaTypesTabs.component.html'
})
export class VisaTypesComponent implements OnInit {
  @Input()
  tabsHeader: String[];

  @Input()
  tabsContent: any[];

  activeTab = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
