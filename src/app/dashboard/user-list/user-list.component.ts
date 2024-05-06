import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyMessageService } from '../../shared/my-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit, OnDestroy{

  canAccess: boolean = false;
  visible: boolean = false;
  isLoading: boolean = false;

  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  usersService = inject(UserService);
  myMessageService = inject(MyMessageService);
  userSubscription: Subscription;

  users: [] = []

  ngOnInit(){

    this.getAccessLevel();
    this.isLoading = true;
    this.getUsers();
  }

  getUsers(): void{
    this.userSubscription = this.usersService.getUsers().subscribe({
      next: (result: any) =>{
        this.users = result.data;
        this.isLoading = false;
      },
      error: (errorObject) =>{
        this.myMessageService.showMessage('error','Error',errorObject.error.error);
      }
    });
  }

  addUser(): void{
    // this.router.navigate(['add-user'], {relativeTo: this.activeRoute});
    this.visible = true;
  }

  getAccessLevel(): void{
    const role = sessionStorage.getItem('role');
    if(role === 'admin'){
      this.canAccess = true;
    }
  }

  closeDialog(event: Event): void{
    this.visible = false;
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

}
