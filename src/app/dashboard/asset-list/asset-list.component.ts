import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from './asset.service';
import { Subscription } from 'rxjs';
import { MyMessageService } from '../../shared/my-message.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrl: './asset-list.component.css'
})
export class AssetListComponent implements OnInit, OnDestroy{;

  isLoading: boolean = false;
  visible: boolean = false;
  assets: [] = [];
  canAccess: boolean = false;
  editMode: boolean = false;
  
  assetService = inject(AssetService);
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  myMessageService = inject(MyMessageService);
  assetSubscription: Subscription;

  ngOnInit(){

    this.getAccessLevel();
    this.isLoading = true;
    this.getAssets();
    
  }

  getAssets(): void{
    this.assetSubscription = this.assetService.getAssets().subscribe({
      next: (result: any) =>{
        this.assets = result.data;
        this.isLoading = false;
      },
      error: (errorObject) =>{
        this.myMessageService.showMessage('error','Error',errorObject.error.error);
      }
    });
  }

  addAsset(): void{
    this.visible = true;
  }

  closeDialog(event: Event): void{
    this.visible = false;
    this.getAssets();
  }

  closeUpdateDialog(event: Event): void{
    this.editMode = false;
    this.getAssets();
  }

  onUpdateAsset(index: string){
    this.editMode = true;
    console.log(this.assets[index].asset_id);
  }

  getAccessLevel(): void{
    const role = sessionStorage.getItem('role');
    if(role === 'asset manager'){
      this.canAccess = true;
    }
  }

  ngOnDestroy(): void {
    this.assetSubscription?.unsubscribe();
  }
}
