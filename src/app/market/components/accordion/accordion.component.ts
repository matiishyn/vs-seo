import {Component, Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'accordion',
  template:`
  <ng-content></ng-content>
          `,
  host: {
    'class': 'panel-group'
  }
})
export class Accordion {
  groups: Array<AccordionGroup> = [];

  addGroup(group: AccordionGroup): void {
    this.groups.push(group);
  }

  closeOthers(openGroup: AccordionGroup): void {
    this.groups.forEach((group: AccordionGroup) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }

  removeGroup(group: AccordionGroup): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}

@Component({
  selector: 'accordion-group',
  styleUrls: ['./accordion.scss'],
  template:`
                <!--<div class="accordion-item">-->
                  <!--<div class="title"> asd-->
                    <!--<span>{{heading}}</span>-->
                    <!--&lt;!&ndash;<icon type="arrowRight"></icon>&ndash;&gt;-->
                  <!--</div>-->
                  <!--<div class="text-wrap">-->
                    <!--<div class="text"><ng-content></ng-content></div>-->
                  <!--</div>-->
                <!--</div>-->
                <div class="panel panel-default" [ngClass]="{'panel-open': isOpen}">
                  <div class="panel-heading accordion-item" (click)="toggleOpen($event)">
                    <h4 class="panel-title title">
                      <span>{{heading}}</span>
                    </h4>
                  </div>
                  <div class="panel-collapse" [hidden]="!isOpen">
                    <div class="panel-body text-wrap">
                      <div class="text">
                        <ng-content></ng-content>
                      </div>
                    </div>
                  </div>
                </div>
          `,

})

export class AccordionGroup implements OnDestroy {
  public _isOpen:boolean = false;

  @Input() heading: string;

  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }

  get isOpen() {
    return this._isOpen;
  }

  constructor(public accordion: Accordion) {
    this.accordion.addGroup(this);
  }

  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }

  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
