import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../authentication/authentication.service";
import { MyMessageService } from "../shared/my-message.service";
import { map, take } from "rxjs/operators";

// export const isLoginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)=>{
//     const authService = inject(AuthenticationService);
//     const router = inject(Router);
//     const messageService = inject(MyMessageService);

//     return authService.loggedInStatus.pipe(
//         take(1),
//         map(
//             (isLoggedIn)=>{
//                 if(isLoggedIn){
//                     return true;
//                 }
//                 messageService.showMessage('error','Error','Login to continue');
                
//             }
//         )
//     )
// }