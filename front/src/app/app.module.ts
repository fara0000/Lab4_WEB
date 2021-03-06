import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CheckPointService} from './pages/main-page/main-page-service/check-point.service';
import { LoginService } from './pages/login-page/login-page-service/login.service';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { RegistrationService } from './pages/registration-page/registration-page-service/registration.service';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { GetPointsService } from "./pages/main-page/main-page-service/get-points.service";
import {TokenService} from "./services/token-service.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import {AuthGuard} from "./guard/guard";
import {LoggedInAuthGuard} from "./guard/logged-in.guard";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
      HttpModule,
      FormsModule,
      ButtonModule,
      BrowserModule,
      InputTextModule,
      AppRoutingModule,
      InputNumberModule,
      ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
      AuthGuard,
      LoggedInAuthGuard,
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
