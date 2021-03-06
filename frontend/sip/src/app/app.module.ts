import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './sistema/user/authentication.service';
import { AppConfig } from './app.config';
import { routing }        from './app.routing';
import { LoginComponent } from './sistema/login/login.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthenticationService, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
