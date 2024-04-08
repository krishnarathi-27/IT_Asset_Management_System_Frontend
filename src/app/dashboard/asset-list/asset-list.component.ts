import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from './asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrl: './asset-list.component.css'
})
export class AssetListComponent {
  assetService = inject(AssetService);
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);

  assets: [] = [];
  canAccess: boolean = false;

  ngOnInit(){

    this.getAccessLevel();

    this.assetService.getAssets().subscribe({
      next: (result: any) =>{
        this.assets = result.data;
      }
    });
  }

  addAsset(){
    this.assetService.editMode.next(false);
    this.router.navigate(['add-asset'], {relativeTo: this.activeRoute});
  }

  onUpdateAsset(index: string){
    this.assetService.editMode.next(true);
    this.router.navigate(['update-asset'], {relativeTo: this.activeRoute});
    console.log(this.assets[index].asset_id);
  }

  getAccessLevel(){
    const role = sessionStorage.getItem('role');
    if(role === 'asset manager'){
      this.canAccess = true;
    }
  }
}
