import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ButtonModule } from 'primeng/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './authentication/authentication.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { MessageService, SharedModule } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    AppRoutingModule,
    AuthenticationModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    ToastModule
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
