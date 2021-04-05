// import { AuthState, initialState } from '../state/auth.state';
import { loginActions, loginAction, INITIAL_STATE } from '../actions/auth.actions';

export function authReducer(state = INITIAL_STATE, action: loginAction) {
    console.log(action,'sdfsdfsd');
    
    switch (action.type) {
        case loginActions.LOGIN_SUCCESS:
              {   
                return {
                    ...state,
                    ...action.payload
                };
              }
        default:
          return state;
      }
}
