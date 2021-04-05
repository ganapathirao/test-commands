import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Store , select} from '@ngrx/store'
import { counterIncrement, counterDecrement, counterReset } from './store/actions/count.actions'
import { Observable } from 'rxjs';
import { loginRequest } from './store/actions/auth.actions';
// import { Component, OnInit,EventEmitter, Input,Output, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  userName = 'gnaesh';
  name = 'sf';
  items = [
  ];

  count$: Observable<number>;
  public loginForm : FormGroup;
  htmlSnippet = 'Template <script>alert("XSS Attack")</script> <b>Code attached</b>';
  
  constructor(
    private appservice:AppService,
     private _http:HttpClient,
     private fb:FormBuilder,
     public router:Router,
     private store: Store<{ count: number }>
     
     ){
      this.count$ = store.pipe(select('count'));
      this.loginForm = this.fb.group({
        userName : ['',[Validators.required]],
        password : ['',[Validators.required,Validators.minLength(4)]],
      });
    setTimeout(() => {
      this.title = 'sdfd'
    },5000)
  }
  
    ngDoCheck(changes){
      // console.log(changes);
    }
  updateCount(){
    this.appservice.updateCount();
  }
  gotNewEvent(vare){
    console.log(vare,'got new event from child comp');
    
  }

  getData(){
      this._http.get('../assets/data.json').subscribe((res:any) => {
        this.items = res;
      },
      (err) => {
        alert(err)
      })
  }

  increment(){
    console.log('inc');
    this.store.dispatch(new counterIncrement())
  }

  decrement(){
    console.log('dec');
    this.store.dispatch(new counterDecrement())
  }

  reset(){
    this.store.dispatch(new counterReset())
  }

  login(){
    this.store.dispatch(new loginRequest({email:this.loginForm.controls.userName.value,password:this.loginForm.controls.password.value}))
  }

  gotoReact(){
    this.router.navigate(['/reactive/2']);  
  }

}
