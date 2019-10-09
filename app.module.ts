import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {MatButtonModule, MatCardModule,MatInputModule, MatListModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { MesssagesComponent } from './messsages.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UsersComponent } from './User.component';
import { ProfileComponent } from './Profile.component';
import { DashboardComponent } from './dashboard.component';



const routes =[
{path: 'register' ,component:RegisterComponent},
{path: 'login' ,component:LoginComponent},
{path: 'users' ,component:UsersComponent},
{path: 'profile/:id' ,component:ProfileComponent},
{path: 'dashboard' ,component:DashboardComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    MesssagesComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    DashboardComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpModule,
     MatButtonModule,
     MatCardModule,
     MatToolbarModule,
     RouterModule.forRoot(routes),
     BrowserAnimationsModule,
     MatInputModule,
     FormsModule,
     MatListModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
