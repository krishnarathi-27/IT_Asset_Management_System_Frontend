import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryListComponent } from "./category-list.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
    {path:'',component: CategoryListComponent}
]

@NgModule({
    declarations:[
        CategoryListComponent,
        AddCategoryComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class CategoryModule{}