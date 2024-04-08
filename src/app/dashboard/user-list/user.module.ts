import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { UserListComponent } from "./user-list.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from 'primeng/dropdown';

const routes: Routes = [
    {path:'',component: UserListComponent ,children: [
        {path: 'add-user', component: AddUserComponent}
      ]},
]

@NgModule({
    declarations:[
        UserListComponent,
        AddUserComponent,
    ],
    imports:[
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        DialogModule,        
        InputTextModule,
        DropdownModule,
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class UserModule{}