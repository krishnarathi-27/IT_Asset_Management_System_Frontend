import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from './issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent {
  issueService = inject(IssueService);
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);

  canAccess: boolean = false;
  issues: [] = [];

  ngOnInit(){

    this.getAccessLevel();
    this.issueService.getIssues().subscribe({
      next: (result: any) =>{
        this.issues = result.data;
      }
    });
    
  }

  addIssue(){
    this.router.navigate(['add-issue'], {relativeTo: this.activeRoute});
  }

  getAccessLevel(){
    const role = sessionStorage.getItem('role');
    if(role === 'admin'){
      this.canAccess = true;
    }
  }
}
