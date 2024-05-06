import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { IssueListComponent } from "./issue-list.component";
import { AddIssueComponent } from "./add-issue/add-issue.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";

const routes: Routes = [
    {path:'',component: IssueListComponent ,children: [
        {path: 'add-issue', component: AddIssueComponent},
        {path: 'update-issue', component: AddIssueComponent}
      ]},
]

@NgModule({
    declarations:[
        AddIssueComponent,
        IssueListComponent
    ],
    imports:[
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        DialogModule,        
        InputTextModule,
        RouterModule.forChild(routes)
    ]
})
export class IssueModule{}