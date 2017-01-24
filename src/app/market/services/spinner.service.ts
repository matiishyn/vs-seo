import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";

@Injectable()
export class SpinnerService {
  private startObservable: Subject<any> = new Subject();
  private endObservable: Subject<any> = new Subject();

  constructor() {
  }

  get start(): Subject<any> {
    return this.startObservable;
  }

  get end(): Subject<any> {
    return this.endObservable;
  }

  onObservable(observable: Observable<any>) {
    this.startObservable.next();
    observable.subscribe(() => this.endObservable.next(), () => this.endObservable.next());
  }
}
