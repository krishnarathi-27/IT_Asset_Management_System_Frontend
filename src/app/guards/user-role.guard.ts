import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { MyMessageService } from "../shared/my-message.service";

export function allowedUsers (...roles: string[]): CanActivateFn {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

        const ROLE = sessionStorage.getItem('role');
        const router = inject(Router)
        const messageService = inject(MyMessageService);

        if(roles.includes(ROLE)){
            return true;
        }
        else{
            messageService.showMessage('error','Error','You have no permission to access this route');
            router.navigate(['/login']);
            return false;
        }
    }
}