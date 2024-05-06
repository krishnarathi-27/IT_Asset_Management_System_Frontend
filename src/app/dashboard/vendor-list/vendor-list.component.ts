import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { VendorService } from './vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyMessageService } from '../../shared/my-message.service';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css'
})
export class VendorListComponent implements OnInit, OnDestroy{
  
  visible: boolean = false;
  canAccess: boolean = false;
  vendors: [] = [];
  isLoading = false;

  vendorService = inject(VendorService);
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  myMessageService = inject(MyMessageService);
  confirmationService = inject(ConfirmationService)
  vendorSubscription$ : Subscription;

  ngOnInit(): void{
    this.getAccessLevel();
    this.isLoading = true;
    this.getVendors();
  }
  
  getVendors(): void{
    this.vendorSubscription$ = this.vendorService.getVendors().subscribe({
      next: (result: any) =>{
        this.vendors = result.data;
        this.isLoading = false;
      }
    });
  }

  addVendor(): void{
    // this.router.navigate(['add-vendor'], {relativeTo: this.activeRoute});
    this.visible = true;
  }

  closeDialog(event: Event): void{
    this.visible = false;
    this.getVendors();
  }

  onDeleteVendor(event: Event,vendorIndex: string){
    let vendorId = this.vendors[vendorIndex].vendor_id 

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",
      
        accept: () => {
          this.vendorSubscription$ = this.vendorService.deleteVendor(vendorId).subscribe({
            next: (result: any) =>{
              this.myMessageService.showMessage('info', 'Confirmed', result.message);
            }
          })
        },
        reject: () => {
            this.myMessageService.showMessage('error', 'Rejected','You have rejected');
        }
    });
    
  }

  getAccessLevel(): void{
    const role = sessionStorage.getItem('role');
    if(role === 'admin'){
      this.canAccess = true;
    }
  }

  ngOnDestroy(): void {
    this.vendorSubscription$.unsubscribe();
  }
  
}
