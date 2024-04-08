import { Component, inject } from '@angular/core';
import { VendorService } from './vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css'
})
export class VendorListComponent {
  
  vendorService = inject(VendorService);
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);

  canAccess: boolean = false;
  vendors: [] = [];

  ngOnInit(){

    this.getAccessLevel();
    this.vendorService.getVendors().subscribe({
      next: (result: any) =>{
        this.vendors = result.data;
      }
    });
    
  }

  addVendor(){
    this.router.navigate(['add-vendor'], {relativeTo: this.activeRoute});
  }

  onDeleteVendor(vendorIndex: string){
    let vendorId = this.vendors[vendorIndex].vendor_id 

    this.vendorService.deleteVendor(vendorId).subscribe({
      next: (result: any) =>{
        console.log(result)
      }
    })
  }

  getAccessLevel(){
    const role = sessionStorage.getItem('role');
    if(role === 'admin'){
      this.canAccess = true;
    }
  }
  
}
