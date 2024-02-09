import { Component, OnInit } from '@angular/core';
import { PostService } from './postagem.service';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { NotificationType } from 'src/app/models/notification';
import { Operation } from 'src/app/models/Operation';
import { Post } from 'src/app/models/Post'

@Component({
  selector: 'tcv-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.scss']
})
export class PostagemComponent implements OnInit {

  operation:string = Operation.LIST

  Post:Post[] = []
  PostReading!:Post

  constructor(private postService:PostService,
    private notify:NotificationService){}

  ngOnInit(): void {
    this.getPost()
  }

  getPost(){
    this.postService.getArticle().subscribe({
        next:(data)=>{
            let dados:any
            dados = data
            console.log(dados);

            dados.forEach((i:any) => {this.Post.push(i)});
        },
        error:(error)=>{
          this.notify.notify({
            message: 'Erro ao buscar artigos no firebase!',
            type: NotificationType.ERROR
          })
        },
        complete:()=>{
          this.notify.notify({
            message: 'Buscado com sucesso!',
            type: NotificationType.SUCSESS
          })
        }
    })
  }

  changeOp(op:string, post:Post){
    this.operation = op
    this.PostReading = post
  }




}
