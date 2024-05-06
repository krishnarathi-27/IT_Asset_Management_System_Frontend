import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class UserService{

    constructor(private http: HttpClient){};

    getUsers(){
        return this.http.get(
            'http://127.0.0.1:5000/v1/users'
        )
    };

    createUser(username: string, role: string){
        return this.http.post(
            'http://127.0.0.1:5000/v1/users',
            {
                username: username,
                role: role
            }
        )
    };

    getProfile(){
        return this.http.get(
            'http://127.0.0.1:5000/v1/users/profile'
        )
    }
    
}