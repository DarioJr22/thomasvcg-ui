import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostagemRoutingModule } from './postagem-routing.module';
import { PostagemComponent } from './postagem.component';



@NgModule({
  declarations: [PostagemComponent],
  imports: [
    CommonModule,
    SharedModule,
    PostagemRoutingModule
  ]
})
export class PostagemModule { }
