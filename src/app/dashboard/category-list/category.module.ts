import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { CategoryListComponent } from "./category-list.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";

const routes: Routes = [
    {path:'',component: CategoryListComponent ,children: [
        {path: 'add-category', component: AddCategoryComponent}
      ]},
]

@NgModule({
    declarations:[
        CategoryListComponent,
        AddCategoryComponent
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
    ]
})
export class CategoryModule{}