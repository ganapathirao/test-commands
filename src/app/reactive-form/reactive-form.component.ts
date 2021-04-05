import { Component, OnInit,EventEmitter, Input,Output, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { numberValidator } from './numbers-validator';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit, OnChanges {
  public loginForm : FormGroup;
  state$:Observable<any>;
  public count : any = 0;
  public counts : any = 'sdfdfwefsdf';
  @Input() name;
  @Output() newEvent:EventEmitter<String>  = new EventEmitter<String>();

  constructor(
    private route: ActivatedRoute,
    private fb:FormBuilder, private appservice:AppService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName : ['',[Validators.required,new numberValidator()]],
      password : ['',[Validators.required,Validators.minLength(4)]],
    });
    this.appservice.isCountUpdated.subscribe(res => {
      console.log(res);
      this.count = res;
    },
    err => console.log(err))

    this.state$  = this.route
      .paramMap
      .pipe(map(() => window.history.state))
  
    this.state$.subscribe(res => {
      console.log(res);
      
    })


  }

  onSubmit(){
    console.log(this.loginForm.value);
  }

  resetForm(){
    this.loginForm.reset();
  }

  ngOnChanges(changes){
    console.log(changes);
  }

  updateForm(){
    this.loginForm.patchValue({
      userName:'ganesh',
      password:'1234567'
    })
  }

  fire(){
    this.newEvent.emit(this.counts);
  }

}
