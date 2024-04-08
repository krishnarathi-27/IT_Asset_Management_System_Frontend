import { Component, ViewChild, inject } from '@angular/core';
import { AssetService } from '../asset.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MyMessageService } from '../../../shared/my-message.service';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrl: './update-asset.component.css'
})
export class UpdateAssetComponent {
  visible = true;
  assetType: string[];
  selectedAssetType: string = 'assignable';

  @ViewChild('assetForm') assetForm : NgForm

  router = inject(Router);
  assetService = inject(AssetService);
  myMessageService = inject(MyMessageService);
  updateMode: Boolean;

  ngOnInit() {
        this.assetService.editMode.subscribe({
          next:(data) =>{
            this.updateMode = data
            console.log(this.updateMode)
          }
        });
        this.assetType = ['assignable','unassignable']
    }

  close(){
    this.visible = false;
    this.router.navigate(['assets'])
  }

  onAddUser(){

    if(!this.assetForm.valid){
      return;
    }

    const categoryName = this.assetForm.value.category_name;
    const brandName = this.assetForm.value.brand_name;
    const vendorEmail = this.assetForm.value.vendor_email
    const assetType = this.assetForm.value.dropdownMenu;

    this.assetService.createAsset(categoryName,brandName,vendorEmail,assetType).subscribe({
      next: (result: any) =>{
        this.close();
        this.myMessageService.showMessage('success','Success',result.message);
      },
      error: (errorObject) =>{
        this.myMessageService.showMessage('error','Error',errorObject.error.error);
      }
    });

    this.assetForm.reset();
  }
}
