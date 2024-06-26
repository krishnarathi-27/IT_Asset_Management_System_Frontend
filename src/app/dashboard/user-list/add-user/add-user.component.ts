import { Component, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { MyMessageService } from '../../../shared/my-message.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit{
  roles: string[];
  selectedRole: string;

  @Input('visible') visible: boolean;
  @Output() onSuccessApplied = new EventEmitter<void>();
  @ViewChild('userForm') userForm : NgForm

  router = inject(Router);
  usersService = inject(UserService);
  myMessageService = inject(MyMessageService);

  ngOnInit() {
        this.roles = ['Employee','Asset Manager'];
  }

  close(){
      this.visible = false;
      this.onSuccessApplied.emit();
  }

  onAddUser(){

    if(!this.userForm.valid){
      return;
    }

    const username = this.userForm.value.username;
    let role = this.userForm.value.dropdownMenu;
    role = role.toLowerCase();

    this.usersService.createUser(username,role).subscribe({
      next: (result: any) =>{
        this.close();
        this.myMessageService.showMessage('success','Success',result.message);
      },
      error: (errorObject) =>{
        this.myMessageService.showMessage('error','Error',errorObject.error.error);
      }
    });

    this.userForm.reset();
  }
  
}
