import { Action, union } from '@ngrx/store';

export enum loginActions {
    LOGIN_REQUEST = "[login] login request",
    LOGIN_SUCCESS = "[login] login success",
}

export const INITIAL_STATE = {
    isLogged: false
}

export class loginRequest implements Action {
    readonly type = loginActions.LOGIN_REQUEST;
    constructor(public payload: { email: string, password: string }) {
        console.log(payload,'logins');
        
    }
}


export class loginSuccess implements Action {
    readonly type = loginActions.LOGIN_SUCCESS;
    constructor(public payload:any){}
}

export type loginAction = loginRequest | loginSuccess;
