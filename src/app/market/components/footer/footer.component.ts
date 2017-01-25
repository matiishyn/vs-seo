import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
  public params: any;

  ngOnInit() {
    const d = new Date();
    this.params = {
      year: d.getFullYear()
    };
  }
}
