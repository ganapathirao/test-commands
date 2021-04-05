import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppService } from './app.service';
import { changeText } from './app.directive';
import { newUpperCase } from './uppercase.pipe'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './interceptor';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { countReducer } from './store/reducers/count.reducer';
import { authEffects } from './store/effects/auth.effects';
import { authReducer } from './store/reducers/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    changeText,
    newUpperCase,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([authEffects]),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AppService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
