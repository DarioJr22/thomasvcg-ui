import { Component, HostListener } from '@angular/core';
import { MENU } from 'src/app/models/menu';

@Component({
  selector: 'tc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menu = MENU
  logo = {
    height: 135,
    width: 135
  }
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    const resizeWindow = window.innerWidth;
     if(resizeWindow <= 768){
        this.logo.height = 80;
        this.logo.width = 80;
     }else{
        this.logo.height = 100;
        this.logo.width = 100;
     }
  }


}
