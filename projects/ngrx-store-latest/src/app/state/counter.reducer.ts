import { createReducer, on } from '@ngrx/store';
import { AppState, initialState } from './app.state';
import { decrement as decrement, increment, reset } from './counter.actions';

export const counterReducer = createReducer(
  initialState,
  on(increment, (state: AppState, action) => {
    console.log(action);
    return {
      ...state,
      counter: { counter: state.counter.counter + action.value },
    };
  }),
  on(decrement, (state: AppState,action) => {
    return {
      ...state,
      counter: { counter: state.counter.counter - action.value },
    };
  }),
  on(reset, (state: AppState) => {
    return {
      ...state,
      counter: { counter: 0 },
    };
  })
);
