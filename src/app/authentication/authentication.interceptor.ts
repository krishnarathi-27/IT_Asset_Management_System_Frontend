import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if(req.url.includes('login')){
      return next.handle(req);
    }
    
    const accessToken = sessionStorage.getItem('accessToken');
    const clonedRequest = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${accessToken}`)
    })
    return next.handle(clonedRequest);
  }

}