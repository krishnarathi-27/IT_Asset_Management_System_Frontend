import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { IssueListComponent } from "./issue-list.component";
import { AddIssueComponent } from "./add-issue/add-issue.component";

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
        TableModule,
        ButtonModule,
        RouterModule.forChild(routes)
    ]
})
export class IssueModule{}