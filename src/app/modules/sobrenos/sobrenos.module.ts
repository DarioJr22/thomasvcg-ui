import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobrenosComponent } from './sobrenos.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SobrenosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SobrenosModule { }
