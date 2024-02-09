import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostagemRoutingModule } from './postagem-routing.module';
import { PostagemComponent } from './postagem.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [PostagemComponent],
  imports: [
    CommonModule,
    SharedModule,
    PostagemRoutingModule,
    NgbTooltip,
    MatIconModule
  ]
})
export class PostagemModule { }
