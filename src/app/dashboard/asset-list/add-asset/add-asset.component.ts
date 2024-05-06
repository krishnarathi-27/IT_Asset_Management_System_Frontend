import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MyMessageService } from '../../../shared/my-message.service';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrl: './add-asset.component.css'
})
export class AddAssetComponent {
  assetType: string[];
  selectedAssetType: string = 'assignable';

  @Input('visible') visible: boolean;
  @Output() onSuccessApplied = new EventEmitter<void>();
  @ViewChild('assetForm') assetForm : NgForm

  router = inject(Router);
  assetService = inject(AssetService);
  myMessageService = inject(MyMessageService);
  updateMode: Boolean;

  ngOnInit() {
        this.assetService.editMode.subscribe({
          next:(data) =>{
            this.updateMode = data
          }
        });
        this.assetType = ['assignable','unassignable']
    }

  // close(){
  //   this.visible = false;
  //   this.router.navigate(['assets'])
  // }

  close(){
    this.visible = false;
    this.onSuccessApplied.emit();
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
