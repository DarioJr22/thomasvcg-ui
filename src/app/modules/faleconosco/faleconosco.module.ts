import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaleConoscoComponent } from './faleconosco.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaleConoscoRoutingModule } from './faleconosco-routing.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FaleConoscoComponent
  ],
  imports: [
    NgxMaskDirective,
    NgxMaskPipe,
    CommonModule,
    SharedModule,
    FaleConoscoRoutingModule,
    FormsModule
  ],
  providers:[
    provideNgxMask()
  ]
})
export class FaleconoscoModule { }
