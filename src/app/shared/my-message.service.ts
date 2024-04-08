import { Injectable, inject } from "@angular/core";
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn:'root'
})
export class MyMessageService{
    
  messageService = inject(MessageService);

  showMessage(severityLevel: string, severitySummary: string, detailedMessage: string){
    this.messageService.add({ 
        severity: severityLevel, 
        summary: severitySummary, 
        detail: detailedMessage 
    });
  }
    
}