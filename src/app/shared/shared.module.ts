import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";

@NgModule({
    imports:[
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        DialogModule,        
        InputTextModule,
        DropdownModule,
        CardModule,
        MenubarModule
    ],
    exports:[
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        DialogModule,        
        InputTextModule,
        DropdownModule,
        CardModule,
        MenubarModule
    ]
})
export class SharedModule{}