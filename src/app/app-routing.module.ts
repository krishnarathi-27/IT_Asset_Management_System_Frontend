import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    {path: '',redirectTo: 'login', pathMatch:'full'},
    {path: 'login',component: AuthenticationComponent},
    {path:'dashboard',component: DashboardComponent },
    {path: 'users', loadChildren: () => import('./dashboard/user-list/user.module').
                                then(mod => mod.UserModule)},
    {path: 'vendors', loadChildren: () => import('./dashboard/vendor-list/vendor.module').
                                then(mod => mod.VendorModule)},
    {path: 'categories', loadChildren: () => import('./dashboard/category-list/category.module').
                                then(mod => mod.CategoryModule)},
    {path: 'assets', loadChildren: () => import('./dashboard/asset-list/asset.module').
                                then(mod => mod.AssetModule)},
    {path: 'issues', loadChildren: () => import('./dashboard/issue-list/issue.module').
                                then(mod => mod.IssueModule)}
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}