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
  @HostListener('window:load',['$event'])
  onResize(event:any){
    let open = document.querySelector('.menu')?.contains(document.querySelector('.opened') as HTMLElement)
    const resizeWindow = window.innerWidth;
     if(resizeWindow <= 768 ){
        this.logo.height = 80;
        this.logo.width = 80;
        if(open){
          const menu = document.querySelector('.menu');
          menu?.classList.remove('opened');
        }
     }else{
        this.logo.height = 100;
        this.logo.width = 100;
     }
  }

  changMenuSize(){

  }

  toggleMenu() {
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('opened');
  }


}
