import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { AssetListComponent } from "./asset-list.component";
import { UpdateAssetComponent } from "./update-asset/update-asset.component";
import { FormsModule } from "@angular/forms";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {path:'',component: AssetListComponent ,children: [
        {path: 'add-asset', component: UpdateAssetComponent},
        {path: 'update-asset', component: UpdateAssetComponent}
    ]},
]

@NgModule({
    declarations:[
        AssetListComponent,
        UpdateAssetComponent
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
export class AssetModule{}