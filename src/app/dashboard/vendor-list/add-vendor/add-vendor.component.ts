import { Component, EventEmitter, Input, OnDestroy, Output, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { MyMessageService } from '../../../shared/my-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrl: './add-vendor.component.css'
})
export class AddVendorComponent implements OnDestroy{

  roles: string[];
  selectedRole: string;
  router = inject(Router);
  vendorService = inject(VendorService);
  myMessageService = inject(MyMessageService);
  vendorSubscription: Subscription;

  @Input('visible') visible: boolean;
  @Output() onSuccessApplied = new EventEmitter<void>();
  @ViewChild('vendorForm') vendorForm : NgForm


  close(): void{
    this.visible = false;
    this.onSuccessApplied.emit();
  }

  onAddVendor(): void{

    if(!this.vendorForm.valid){
      return;
    }

    const vendorname = this.vendorForm.value.vendorname;
    const vendoremail = this.vendorForm.value.vendoremail;

    this.vendorSubscription = this.vendorService.createVendor(vendorname,vendoremail).subscribe({
      next: (result: any) =>{
        this.close();
        this.myMessageService.showMessage('success','Success',result.message);
      },
      error: (errorObject) =>{
        this.myMessageService.showMessage('error','Error',errorObject.error.error);
      }
    });

    this.vendorForm.reset();
  }

  ngOnDestroy(): void {
    if(this.vendorSubscription)
      this.vendorSubscription.unsubscribe();
  }
  
}
