import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaleConoscoComponent } from './faleconosco.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaleConoscoRoutingModule } from './faleconosco-routing.module';



@NgModule({
  declarations: [
    FaleConoscoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FaleConoscoRoutingModule
  ]
})
export class FaleconoscoModule { }
