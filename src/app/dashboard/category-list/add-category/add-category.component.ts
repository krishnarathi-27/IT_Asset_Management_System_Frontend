import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { MyMessageService } from '../../../shared/my-message.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  visible = true;
  roles: string[];
  selectedRole: string;

  @ViewChild('categoryForm') categoryForm : NgForm

  router = inject(Router);
  categoryService = inject(CategoryService);
  myMessageService = inject(MyMessageService);

  ngOnInit() {
        this.roles = ['Employee','Asset Manager'];
    }

  close(){
    this.visible = false;
    this.router.navigate(['categories'])
  }

  onAddCategory(){

    if(!this.categoryForm.valid){
      return;
    }

    const categoryName = this.categoryForm.value.category_name;
    const brandName = this.categoryForm.value.brand_name;
    const vendorEmail = this.categoryForm.value.vendor_email;

    this.categoryService.createCategory(categoryName,brandName,vendorEmail).subscribe({
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
}
