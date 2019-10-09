
import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'login',
  template: `
  <mat-card>
  <mat-card-header>
  <mat-card-title>
  <h3>Login </h3>
  </mat-card-title>
  </mat-card-header>
  <mat-card-content>
  <form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput [(ngModel)]="loginData.email" name="email" placeholder="Email" type="email">
  </mat-form-field>
<br>
  <mat-form-field class="example-full-width">
  <input matInput  [(ngModel)]="loginData.password" name="password" placeholder="password"  type="password">
  </mat-form-field>
  <button mat-raised-button (click)="post()">Login</button>
</form>
</mat-card-content>
</mat-card>

  `
  
})
export class LoginComponent {
    loginData = {}

    constructor(private apiService: ApiService){}

    post() {
        this.apiService.loginUser(this.loginData);
    }
}