import { Component, OnInit, inject } from '@angular/core';
import {Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  items:MenuItem[] = [];
  router = inject(Router);
  authService = inject(AuthenticationService);
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.authService.loggedInStatus.subscribe({
      next: (result: boolean) =>{
        this.isLoggedIn = result;
        if(this.isLoggedIn){

          this.displayNavItems();
        }
      },
      error: (errorObject) =>{
        console.log(errorObject);
      }
    })
    

  }


  displayNavItems(){
    this.items = [
      {
        label:'Dashboard', 
        routerLink: 'dashboard'
      },
      {
        label:'Profile',
        routerLink: 'user/profile'
      }
    ]
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
