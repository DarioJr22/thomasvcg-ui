import { Component, HostListener, Input, Renderer2 } from '@angular/core';
import { MENU } from 'src/app/models/menu';

@Component({
  selector: 'tcv-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.scss']
})
export class MenuToggleComponent {

  menu = MENU
  @HostListener('window:resize',['$event'])
  onWindowResize(){
     const resizeWindow = window.innerWidth;
     let open = document.querySelector('.menu')?.contains(document.querySelector('.opened') as HTMLElement)
      if(resizeWindow <= 768 && open){
        const menu = document.querySelector('.menu');
        menu?.classList.remove('opened');
      }


  }
  constructor(private renderer:Renderer2){

  }

  toggleMenu() {
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('opened');
  }
}
