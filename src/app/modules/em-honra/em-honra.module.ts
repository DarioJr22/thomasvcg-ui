import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmHonraComponent } from './em-honra.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmHonraRoutingModule } from './em-honra-routing,module';



@NgModule({
  declarations: [
    EmHonraComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmHonraRoutingModule
  ]
})
export class EmHonraModule { }
