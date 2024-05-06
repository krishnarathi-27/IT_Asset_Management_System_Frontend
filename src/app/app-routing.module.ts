import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { isLoginGuard } from "./guards/auth.guard";
import { allowedUsers } from "./guards/user-role.guard";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
const routes: Routes = [
    {
        path: '',
        redirectTo: 'login', 
        pathMatch:'full'
    },
    {
        path: 'login',
        component: AuthenticationComponent
    },
    {
        path:'dashboard',
        component: DashboardComponent,
        canActivate:[isLoginGuard]
    },
    {
        path: 'users', 
        loadChildren: () => import('./dashboard/user-list/user.module').then(mod => mod.UserModule),
        canActivate:[isLoginGuard,allowedUsers('admin','asset manager')]
    },
    {
        path: 'vendors', 
        loadChildren: () => import('./dashboard/vendor-list/vendor.module').then(mod => mod.VendorModule),
        canActivate:[isLoginGuard,allowedUsers('admin','asset manager')]
    },
    {
        path: 'categories', 
        loadChildren: () => import('./dashboard/category-list/category.module').then(mod => mod.CategoryModule),
        canActivate:[isLoginGuard,allowedUsers('admin','asset manager')]
    },
    {
        path: 'assets', 
        loadChildren: () => import('./dashboard/asset-list/asset.module').then(mod => mod.AssetModule),
        canActivate:[isLoginGuard,allowedUsers('admin','asset manager')]
    },
    // {
    //     path: 'issues', 
    //     loadChildren: () => import('./dashboard/issue-list/issue.module').then(mod => mod.IssueModule),
    //     canActivate:[isLoginGuard,allowedUsers('employee','asset manager')]
    // },
    // {
    //     path:'profile',
    //     component: ProfileComponent,
    //     canActivate:[isLoginGuard]
    // },
    { path: '**', component: PageNotFoundComponent },
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}