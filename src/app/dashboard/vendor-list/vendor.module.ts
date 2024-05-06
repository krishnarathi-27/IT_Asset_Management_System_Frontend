import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VendorListComponent } from "./vendor-list.component";
import { AddVendorComponent } from "./add-vendor/add-vendor.component";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
    {path:'',component: VendorListComponent}
]

@NgModule({
    declarations:[
        VendorListComponent,
        AddVendorComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class VendorModule{}