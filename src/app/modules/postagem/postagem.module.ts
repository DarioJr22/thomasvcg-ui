import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostagemRoutingModule } from './postagem-routing.module';
import { PostagemComponent } from './postagem.component';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { AngularMarkdownEditorModule, EditorOption } from 'angular-markdown-editor';
import { MarkdownModule,  MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import '@github/markdown-toolbar-element'


 export const config: EditorOption = {

  onChange:(e:any) => {console.log(e)}
}

/* export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + "</p></blockquote>";
  };

  return {
    renderer: renderer,
    gfm: true,
    breaks: false,
    pedantic: false
  };
} */

@NgModule({
  declarations: [PostagemComponent],
  imports: [
    CommonModule,
    SharedModule,
    PostagemRoutingModule,
    NgbTooltip,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    AngularMarkdownEditorModule.forRoot(config),
    MarkdownModule.forRoot()
  ],

  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[

  ]
})
export class PostagemModule { }
