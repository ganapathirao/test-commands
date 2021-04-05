import { BehaviorSubject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})

export class AppService {
    constructor( private _http:HttpClient){

    }
    isCountChanged = new BehaviorSubject(null);
    isCountUpdated  = this.isCountChanged.asObservable();

    updateCount(){
        this.isCountChanged.next(2);
    }

    getData(email,password){
        return this._http.get('../assets/data.json').pipe(
            map((response) => {
                if(email == 'admin' && password == '1234'){
                    return {'isLogged':true}
                } else {
                    return {'isLogged':false};
                }
            })
          );
        }

}