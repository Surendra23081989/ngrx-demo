import { createAction, props } from '@ngrx/store';

export const increment = createAction('[counter page] increment', props<{value:number}>());
export const decrement = createAction('[counter page] decrement', props<{value:number}>());
export const reset = createAction('[counter page] reset');
