import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostagemComponent } from "./postagem.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostCreateComponent } from "./post-create/post-create.component";
import { PostReadComponent } from "./post-read/post-read.component";


const routes:Routes =[
  {
    path:"",
    component:PostagemComponent,
    children:[
      { path: "", component: PostListComponent }, // Rota padrão (LIST)
      { path: "create", component: PostCreateComponent }, // Criação
      { path: ":id", component: PostReadComponent }, // Leitura por ID
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class PostagemRoutingModule{}
