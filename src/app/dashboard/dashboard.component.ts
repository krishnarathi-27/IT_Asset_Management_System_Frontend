import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  userRole: string = '';
  cards: object[];
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  allCards = [
    {
      id: 1,
      header: 'Users',
      subheader: 'View users in system',
      image: './././assets/user-image.png',
      accessLevel: ['admin','asset manager']
    },
    {
      id: 2,
      header: 'Vendors',
      subheader: 'View vendors of assets',
      image: './././assets/user-image.png',
      accessLevel: ['admin','asset manager']
    },
    {
      id: 3,
      header: 'Categories',
      subheader: 'View categories of assets',
      image: './././assets/user-image.png',
      accessLevel: ['admin','asset manager']
    },
    {
      id: 4,
      header: 'Assets',
      subheader: 'View assets in system',
      image: './././assets/user-image.png',
      accessLevel: ['admin','asset manager']
    },
    // {
    //   id: 5,
    //   header: 'Issues',
    //   subheader: 'View issues in system',
    //   image: './././assets/user-image.png',
    //   accessLevel: ['asset manager','employee']
    // }
  ]

  ngOnInit(): void{
    this.userRole = sessionStorage.getItem('role');
    this.cards = this.allCards.filter((item)=>item.accessLevel.includes(this.userRole) === true);
  }

  onVisitClick(cardIndex): void{
      switch (cardIndex) {
        case 1:
          this.router.navigate(['/users']);
          break;
        case 2:
          this.router.navigate(['/vendors']);
          break;
        case 3:
          this.router.navigate(['/categories']);
          break;
        case 4:
          this.router.navigate(['/assets']);
          break;
        case 5:
          this.router.navigate(['/issues']);
          break;
        default:
          break;
      }
    }

}
