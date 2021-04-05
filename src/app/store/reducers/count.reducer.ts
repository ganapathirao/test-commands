// import { AuthState, initialState } from '../state/auth.state';
import { CounterActions, countActions, INITIAL_STATE } from '../actions/count.actions';

export function countReducer(state = INITIAL_STATE, action: CounterActions) {
    console.log(action);
    
    switch (action.type) {
        case countActions.COUNT_INCREMENT:
          return state+1;
        case countActions.COUNT_DECREMENT:
          return state-1;
        case countActions.COUNT_RESET:
          return 0;
        default:
          return state;
      }
}
