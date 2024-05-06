import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit, OnDestroy{

  categoryService = inject(CategoryService);
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  categorySubscription : Subscription;

  categories: [] = [];
  visible: boolean = false;
  isLoading: boolean = false;

  ngOnInit(): void{
    this.isLoading = true;
    this.getCategories();
  }

  getCategories(): void{
    this.categorySubscription = this.categoryService.getCategories().subscribe({
      next: (result: any) =>{
        this.categories = result.data;
        this.isLoading = false;
      }
    });
  }

  addCategory(): void{
    this.visible = true;
  }

  closeDialog(event: Event): void{
    this.visible = false;
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.categorySubscription.unsubscribe();
  }
  
}
