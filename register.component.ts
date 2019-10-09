
import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'register',
  template: `
  <mat-card>
  <mat-card-header>
  <mat-card-title>
  <h3>Register Here</h3>
  </mat-card-title>
  </mat-card-header>
  <mat-card-content>
  <form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput [(ngModel)]="registerData.email" name="email" placeholder="Email" type="email">
  </mat-form-field>
<br>
  <mat-form-field class="example-full-width">
  <input matInput  [(ngModel)]="registerData.password" name="password" placeholder="password"  type="password">
  </mat-form-field>
  <br>
  <mat-form-field class="example-full-width">
  <input matInput  [(ngModel)]="registerData.name" name="name" placeholder="name"  type="text">
  </mat-form-field>
  <br>
  <mat-form-field class="example-full-width">
  <input matInput  [(ngModel)]="registerData.number" name="number" placeholder="number" >
  </mat-form-field>
  <br>
  <mat-form-field class="example-full-width">
  <input matInput  [(ngModel)]="registerData.flat" name="flat" placeholder="flat">
  </mat-form-field>
  <br>
  <mat-form-field class="example-full-width">
  <input matInput  [(ngModel)]="registerData.ownername" name="ownername" placeholder="ownername"  type="text">
  </mat-form-field>
  <br>
  <button mat-raised-button (click)="post()">Register</button>
</form>
</mat-card-content>
</mat-card>

  `
  
})
export class RegisterComponent {
    registerData = {}

    constructor(private apiService: ApiService){}

    post() {
        this.apiService.sendUserRegistration(this.registerData);
    }
}