import { Injectable } from '@angular/core';
import { Actions ,Effect, ofType } from '@ngrx/effects';
import { EMPTY, throwError } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { loginActions, loginSuccess, loginRequest } from '../actions/auth.actions'
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

const handleSignIn = (user) => {
    
        console.log(user);
    if(user.isLogged){
        localStorage.setItem('user',JSON.stringify(user));
        return new loginSuccess(user);
    } else {
       console.log('unauthorized');
        return null;
    }


}
@Injectable()
export class authEffects {
    
    constructor(
        private actions$: Actions,
        private router:Router,
        private appService: AppService
      ) {
        console.log('effects');
      }
    
  @Effect()
  loadMovies$ = this.actions$
    .pipe(
      ofType(loginActions.LOGIN_REQUEST),
      map((action:loginRequest) => action.payload),
      switchMap((payload) => this.appService.getData(payload.email,payload.password)
        .pipe(
            map((user) => handleSignIn(user))
        ))
      )


    @Effect({dispatch: false})
  signInRedirect$ = this.actions$.pipe(
    ofType(loginActions.LOGIN_SUCCESS),
    tap(() => this.router.navigate(['/reactive']))
  );

 
  
}