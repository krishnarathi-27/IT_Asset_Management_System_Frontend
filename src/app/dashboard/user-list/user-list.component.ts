import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyMessageService } from '../../shared/my-message.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  usersService = inject(UsersService);
  myMessageService = inject(MyMessageService);
  canAccess: boolean = false;

  users: [] = []

  ngOnInit(){
    
    this.getAccessLevel();

    this.usersService.getUsers().subscribe({
      next: (result: any) =>{
        this.users = result.data;
      },
      error: (errorObject) =>{
        this.myMessageService.showMessage('error','Error',errorObject.error.error);
      }
    });
  }

  addUser(){
    this.router.navigate(['add-user'], {relativeTo: this.activeRoute});
  }

  getAccessLevel(){
    const role = sessionStorage.getItem('role');
    if(role === 'admin'){
      this.canAccess = true;
    }
  }

}
