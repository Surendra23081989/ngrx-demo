import { Component, inject, OnInit } from '@angular/core';
import { AppState } from './state/app.state';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './state/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ngrx-store-latest';
  store = inject(Store<AppState>);
  counter = 0;
  ngOnInit(): void {
    this.store.select('counters').subscribe((data) => {
      this.counter = data.counter.counter;
    });
  }

  incrementCounter() {
    this.store.dispatch(increment({value:10}));
  }
  decrementCounter() {
    this.store.dispatch(decrement({value:5}));
  }
  resetCounter() {
    this.store.dispatch(reset());
  }
}
