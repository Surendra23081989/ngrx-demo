export interface CounterState {
  counter: number;
}
export interface UserState {
  name: string;
  age: number;
}
export interface AppState {
  counter: CounterState
  user: UserState;
}
export const initialState: AppState = {
    counter: { counter: 0 },
    user: { name: '', age: 0 },
};
