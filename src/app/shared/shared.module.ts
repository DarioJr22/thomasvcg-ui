import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCardComponent } from './single-card/single-card.component';
import { MultiCardsComponent } from './multi-cards/multi-cards.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    SingleCardComponent,
    MultiCardsComponent,
    ButtonComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[

    SingleCardComponent,
    MultiCardsComponent,
    ButtonComponent,
    NavbarComponent,
    MatIconModule,
    FooterComponent

  ]
})
export class SharedModule { }
