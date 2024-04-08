import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  categoryService = inject(CategoryService);
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);

  categories: [] = []

  ngOnInit(){
    this.categoryService.getCategories().subscribe({
      next: (result: any) =>{
        this.categories = result.data;
      }
    });
  }

  addCategory(){
    this.router.navigate(['add-category'], {relativeTo: this.activeRoute});
  }
}
