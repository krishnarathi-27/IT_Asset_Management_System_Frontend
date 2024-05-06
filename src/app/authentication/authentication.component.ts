import { Component, OnDestroy, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../dashboard/user-list/user.service';
import { MyMessageService } from '../shared/my-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnDestroy{

  @ViewChild('authForm') authForm : NgForm

  authService = inject(AuthenticationService);
  userService = inject(UserService);
  router = inject(Router);
  myMessageService = inject(MyMessageService);
  authSubscription : Subscription;
  profileSubscription : Subscription;

  onLoginSubmit(): void{

    if(!this.authForm.valid){
      return;
    }

    const username = this.authForm.value.username;
    const password = this.authForm.value.password;

    this. authSubscription = this.authService.login(username,password).subscribe({
      next: (result: any) =>{
        sessionStorage.setItem('accessToken',result.data[0].access_token);
        sessionStorage.setItem('refreshToken',result.data[0].refresh_token);
        this.authService.loggedInStatus.next(true);
        this.getUserRole();
        this.myMessageService.showMessage('success','Success',result.message);
      },
      error: (errorObject) =>{
        this.myMessageService.showMessage('error','Error',errorObject.error.error);
      }
    });

    this.authForm.reset();
  }

  getUserRole(){
    if(sessionStorage.getItem('accessToken')){

      this.userService.getProfile().subscribe({
        next: (result: any) => {
            sessionStorage.setItem('role',result.data[0].role);
            sessionStorage.setItem('userId',result.data[0].user_id);
            this.router.navigate(['/dashboard']);
        }
      });
    }
  }

  ngOnDestroy(): void{
    this.authSubscription?.unsubscribe();
    this.profileSubscription?.unsubscribe();
  }

}
