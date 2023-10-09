import { Component } from '@angular/core';
import { MENU } from 'src/app/models/menu';

@Component({
  selector: 'tc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menu = MENU


}
