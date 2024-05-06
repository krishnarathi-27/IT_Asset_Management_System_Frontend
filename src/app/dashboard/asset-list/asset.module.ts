import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssetListComponent } from "./asset-list.component";
import { UpdateAssetComponent } from "./update-asset/update-asset.component";
import { AddAssetComponent } from './add-asset/add-asset.component';
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
    {path:'',component: AssetListComponent}
]

@NgModule({
    declarations:[
        AssetListComponent,
        UpdateAssetComponent,
        AddAssetComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class AssetModule{}