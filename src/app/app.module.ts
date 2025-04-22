import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeModule } from './home/home.module';
// Remove this line: import { LoginComponent } from './auth/login/login.component';

import { CoreModule } from './core/core.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
import { ConfirmationComponent } from './confirmation/confirmation.component'; // Add AuthModule import

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent, // Only AppComponent should be here
    // Remove LoginComponent (it's already in AuthModule)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    CoreModule,
    HomeModule,
    ClientModule,
    AuthModule, // Make sure AuthModule is imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }