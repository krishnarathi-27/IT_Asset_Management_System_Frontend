import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { VendorListComponent } from "./vendor-list.component";
import { AddVendorComponent } from "./add-vendor/add-vendor.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";

const routes: Routes = [
    {path:'',component: VendorListComponent ,children: [
        {path: 'add-vendor', component: AddVendorComponent}
      ]},
]

@NgModule({
    declarations:[
        VendorListComponent,
        AddVendorComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        InputTextModule,
        TableModule,
        DialogModule,
        ButtonModule,
        RouterModule.forChild(routes)
    ]
})
export class VendorModule{}