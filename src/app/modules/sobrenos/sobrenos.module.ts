import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobrenosComponent } from './sobrenos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SobreNosRoutingModule } from './sobrenos.routing.module';



@NgModule({
  declarations: [SobrenosComponent],
  imports: [
    SharedModule,
    CommonModule,
    SobreNosRoutingModule
  ]
})
export class SobreNosModule { }
