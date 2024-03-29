import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { LoadingType } from '../shared/components/loading/loading-type.enum';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingSubject = new Subject<LoadingType>()

  getLoading() {
    return this.loadingSubject.asObservable()
      .pipe(startWith(LoadingType.STOPPED))
  };

  start() {
    this.loadingSubject.next(LoadingType.LOADING);
  };

  stop() {
    this.loadingSubject.next(LoadingType.STOPPED)
  };

}
