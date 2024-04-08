import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MyMessageService } from "../shared/my-message.service";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService{

    constructor(private http: HttpClient, private myMessageService : MyMessageService){};

    loggedInStatus = new BehaviorSubject<Boolean>(false);

    login(username: string, password: string){

        return this.http.post(
            'http://127.0.0.1:5000/v1/login',
            {
                username: username,
                password: password
            }
        )
    };

    logout(){
        const accessToken = sessionStorage.getItem('accessToken');
        this.http.post(
            'http://127.0.0.1:5000/v1/logout',
            {}
        ).subscribe({
            next: (result: any) =>{
                this.myMessageService.showMessage('success','Success',result.message);
                this.loggedInStatus.next(false);
              },
              error: (errorObject) =>{
                this.myMessageService.showMessage('error','Error',errorObject.error.error);
              }
        })
        sessionStorage.clear();
    }
    
}