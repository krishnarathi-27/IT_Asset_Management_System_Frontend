import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AssetService{

    editMode = new BehaviorSubject<Boolean>(false);

    constructor(private http: HttpClient){};

    getAssets(){
        return this.http.get(
            'http://127.0.0.1:5000/v1/assets'
        )
    };

    createAsset(categoryName: string, brandName: string, vendorEmail: string, assetType: string){
        return this.http.post(
            'http://127.0.0.1:5000/v1/assets',
            {
                category_name : categoryName, 
                brand_name : brandName,
                vendor_email : vendorEmail, 
                asset_type : assetType,
                assigned_to: 'location'
            }
        )
    };

    assignAsset(asset_id:string, categoryName: string, brandName: string, vendorEmail: string, assetType: string, assignedTo: string){
        return this.http.put(
            'http://127.0.0.1:5000/v1/assets/' + asset_id + '/assign',
            {
                category_name : categoryName, 
                brand_name : brandName,
                vendor_email : vendorEmail, 
                asset_type : assetType,
                assigned_to: assignedTo
            }
        )
    };

    unassignAsset(asset_id:string, categoryName: string, brandName: string, vendorEmail: string, assetType: string, assignedTo: string){
        return this.http.put(
            'http://127.0.0.1:5000/v1/assets/' + asset_id + '/unassign',
            {
                category_name : categoryName, 
                brand_name : brandName,
                vendor_email : vendorEmail, 
                asset_type : assetType,
                assigned_to: assignedTo
            }
        )
    };
}