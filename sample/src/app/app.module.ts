import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SwitchComponent } from './switch/switch.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { ReversePipe } from './reverse.pipe'
 
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginComponent,
    RegistrationComponent,
    SwitchComponent,
    BuiltInPipeComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
