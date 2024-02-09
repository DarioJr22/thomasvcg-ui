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


@NgModule({
  declarations: [
    SingleCardComponent,
    MultiCardsComponent,
    ButtonComponent,
    NavbarComponent,
    FooterComponent,
    NotificationComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports:[

    SingleCardComponent,
    MultiCardsComponent,
    ButtonComponent,
    NavbarComponent,
    MatIconModule,
    FooterComponent,
    NotificationComponent

  ],
  providers:[
    { provide: 'ttlDefault', useValue: 3000 }
  ]
})
export class SharedModule { }
