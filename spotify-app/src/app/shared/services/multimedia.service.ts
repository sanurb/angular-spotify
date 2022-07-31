import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>;
  // un Subject:  es Observable y observera a la vez
  myObservable1$: Subject<any> = new Subject();

  constructor() {

    setTimeout(() => {
      this.myObservable1$.next('✔✔✔✔✔✔');
    }, 100)

    setTimeout(() => {
      this.myObservable1$.next('✔✔✔✔✔✔');
    }, 2000)

    // this.myObservable1$ = new Observable(
    //   (observer: Observer<any>) =>{
    //     observer.next('💧')

    //     setTimeout(() =>{
    //       observer.next('✔')
    //     }, 2500)

    //     setTimeout(() =>{
    //       observer.error('✔')
    //     }, 3500)
    //   }
    // )
  }

  private listenAllEvents(): void {

  }
}
