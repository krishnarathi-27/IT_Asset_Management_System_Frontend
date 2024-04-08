import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { MyMessageService } from '../../../shared/my-message.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrl: './add-vendor.component.css'
})
export class AddVendorComponent {
  visible = true;
  roles: string[];
  selectedRole: string;

  @ViewChild('vendorForm') vendorForm : NgForm

  router = inject(Router);
  vendorService = inject(VendorService);
  myMessageService = inject(MyMessageService);

  close(){
    this.visible = false;
    this.router.navigate(['vendors'])
  }

  onAddVendor(){

    if(!this.vendorForm.valid){
      return;
    }

    const vendorname = this.vendorForm.value.vendorname;
    const vendoremail = this.vendorForm.value.vendoremail;

    this.vendorService.createVendor(vendorname,vendoremail).subscribe({
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
  
}
