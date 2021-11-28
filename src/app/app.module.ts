import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { mainRoutingModule } from './main-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserpageComponent } from './userpage/userpage.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { ServiceService } from './service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserpageComponent,
    SignupComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    mainRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
