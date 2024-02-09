import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'tcv-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  notifications:any[] =[]

  constructor(private notifyService:NotificationService){
    this.notifications = notifyService.notifications;

  }
  close(n:number,tipo:HTMLElement){
    //Animation reverse para fechar a notificação - Ainda não resolvido
     tipo.style.cssText = 'animation-direction: reverse';
     //Fecha a notificação
     this.notifyService.closeNotify(n)
    }

}
