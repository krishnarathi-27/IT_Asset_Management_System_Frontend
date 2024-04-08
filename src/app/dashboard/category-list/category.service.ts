import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CategoryService{

    constructor(private http: HttpClient){};

    getCategories(){
        return this.http.get(
            'http://127.0.0.1:5000/v1/categories'
        )
    };

    createCategory(categoryName: string, brandName: string, vendorEmail: string){
        return this.http.post(
            'http://127.0.0.1:5000/v1/categories',
            {
                category_name: categoryName,
                brand_name: brandName,
                vendor_email: vendorEmail
            }
        )
    };
    
}