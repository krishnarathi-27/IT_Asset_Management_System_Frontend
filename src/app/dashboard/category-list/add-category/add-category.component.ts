import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { MyMessageService } from '../../../shared/my-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit, OnDestroy{

  roles: string[];
  selectedRole: string;

  router = inject(Router);
  categoryService = inject(CategoryService);
  myMessageService = inject(MyMessageService);
  categorySubscription : Subscription;
  
  @Input('visible') visible: boolean;
  @Output() onSuccessApplied = new EventEmitter<void>();
  @ViewChild('categoryForm') categoryForm : NgForm
  
  ngOnInit(): void{
        this.roles = ['Employee','Asset Manager'];
  }

  close(): void{
    this.visible = false;
    this.onSuccessApplied.emit();
  }

  onAddCategory(): void{

    if(!this.categoryForm.valid){
      return;
    }

    const categoryName = this.categoryForm.value.category_name;
    const brandName = this.categoryForm.value.brand_name;
    const vendorEmail = this.categoryForm.value.vendor_email;

    this.categorySubscription = this.categoryService.
                                    createCategory(categoryName,brandName,vendorEmail).
                                    subscribe({
      next: (result: any) =>{
        this.close();
        this.myMessageService.showMessage('success','Success',result.message);
      },
      error: (errorObject) =>{
        this.myMessageService.showMessage('error','Error',errorObject.error.error);
      }
    });

    this.categoryForm.reset();
  }

  ngOnDestroy(): void {

    if(this.categorySubscription){
      this.categorySubscription.unsubscribe();
    }
  }
}
