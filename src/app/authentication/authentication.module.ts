import { NgModule } from "@angular/core";
import { AuthenticationComponent } from "./authentication.component";
import { ButtonModule } from 'primeng/button';
import { FormsModule } from "@angular/forms";
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from "@angular/common";
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations:[
        AuthenticationComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        ToastModule,
        CommonModule
    ]
})
export class AuthenticationModule{}