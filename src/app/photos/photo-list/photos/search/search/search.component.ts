import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() Ontyping = new EventEmitter<string>();
  @Input() value: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor() { }
  ngOnDestroy(): void {
   this.debounce.unsubscribe();
  }

  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.Ontyping.emit(filter));
  }

}
