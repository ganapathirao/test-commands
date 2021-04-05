import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(req,next){                     // Implementing intercept method.
    // let setToken = this.auth.getToken();  // getting the token from the localstorage
    let tokenreq = req.clone({             // we are setting the localstorage token into api request headers.
      setHeaders: {
        Authorization :`Bearer ${'setToken'}` 
      }
    })
    return next.handle(tokenreq).pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }   
            return throwError(errorMessage);
        })
      );
  }
}