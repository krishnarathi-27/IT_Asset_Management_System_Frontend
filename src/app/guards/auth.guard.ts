import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { MyMessageService } from "../shared/my-message.service";

export const isLoginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)=>{
    const router = inject(Router);
    const messageService = inject(MyMessageService);
    const token = sessionStorage.getItem('accessToken');

    if(token){
        return true;
    }else{
        messageService.showMessage('error','Error','Please Log in to continue.');
        router.navigate(['/login']);
        return false;
    }
}
 