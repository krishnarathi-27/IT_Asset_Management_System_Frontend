import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class IssueService{

    constructor(private http: HttpClient){};

    getIssues(){
        return this.http.get(
            'http://127.0.0.1:5000/v1/vendors'
        )
    };

    createVendor(vendorName: string, vendorEmail: string){
        return this.http.post(
            'http://127.0.0.1:5000/v1/vendors',
            {
                vendor_email: vendorEmail,
                vendor_name: vendorName
            }
        )
    };


}