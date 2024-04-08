import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class VendorService{

    constructor(private http: HttpClient){};

    getVendors(){
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

    deleteVendor(vendorId: string){
        console.log('http://127.0.0.1:5000/v1/vendors/' + vendorId)
        return this.http.delete(
            'http://127.0.0.1:5000/v1/vendors/' + vendorId
        )
    }
}