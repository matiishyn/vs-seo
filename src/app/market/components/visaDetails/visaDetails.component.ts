import {Component, Input} from '@angular/core';


type VisaType = 'individual' | 'business';

@Component({
  selector: 'visa-details',
  templateUrl: 'visaDetails.component.html'
})
export class VisaDetailsComponent {
  @Input()
  type: VisaType;
}
