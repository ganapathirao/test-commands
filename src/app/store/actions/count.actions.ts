import { Action, union } from '@ngrx/store';
// import { count } from 'console';

export enum countActions {
    COUNT_INCREMENT = "[counter] Increment",
    COUNT_DECREMENT = "[counter] Decrement",
    COUNT_RESET     = "[counter] Reset"
}



export const INITIAL_STATE = 0;

export class counterIncrement implements Action  {
    readonly type = countActions.COUNT_INCREMENT;
}


export class counterDecrement implements Action {
    readonly type = countActions.COUNT_DECREMENT;
}


export class counterReset implements Action {
    readonly type = countActions.COUNT_RESET;
}




export type CounterActions = counterIncrement | counterDecrement | counterReset








