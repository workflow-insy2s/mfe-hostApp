import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ForgetPasswordComponent,
    VerificationCodeComponent,
    RestPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
