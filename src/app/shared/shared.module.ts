import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCardComponent } from './single-card/single-card.component';
import { MultiCardsComponent } from './multi-cards/multi-cards.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    SingleCardComponent,
    MultiCardsComponent,
    ButtonComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[

    SingleCardComponent,
    MultiCardsComponent,
    ButtonComponent,
    NavbarComponent

  ]
})
export class SharedModule { }
