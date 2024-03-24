import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCardComponent } from './single-card/single-card.component';
import { MultiCardsComponent } from './multi-cards/multi-cards.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { MenuToggleComponent } from './menu-toggle/menu-toggle.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolkitComponent } from './toolkit/toolkit.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    SingleCardComponent,
    MultiCardsComponent,
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    NotificationComponent,
    MenuToggleComponent,
    ToolkitComponent,
    LoadingComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    NgbTooltipModule
  ],
  exports:[

    SingleCardComponent,
    MultiCardsComponent,
    ButtonComponent,
    NavbarComponent,
    MatIconModule,
    FooterComponent,
    NotificationComponent,
    MenuToggleComponent,
    ToolkitComponent,
    LoadingComponent


  ],
  providers:[
    { provide: 'ttlDefault', useValue: 9999999 }
  ]
})
export class SharedModule { }
