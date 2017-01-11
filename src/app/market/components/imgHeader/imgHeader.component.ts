import {Component, Input} from '@angular/core';

@Component({
  selector: 'img-header',
  templateUrl: 'imgHeader.component.html'
})
export class ImgHeaderComponent {
  @Input() subHeader: string;
  @Input() header: string;
  @Input() p: string;

  constructor() {
  }
}
