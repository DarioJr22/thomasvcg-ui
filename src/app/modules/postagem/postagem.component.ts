import { Component, OnInit, TemplateRef } from '@angular/core';
import { PostService } from './postagem.service';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { NotificationType } from 'src/app/models/notification';
import { Operation } from 'src/app/models/Operation';
import { Post, TagHandler } from 'src/app/models/Post'
import { EditorInstance, EditorOption } from 'angular-markdown-editor';
import { MarkdownService } from 'ngx-markdown';
import '@github/markdown-toolbar-element'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'tcv-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.scss']
})
export class PostagemComponent implements OnInit {
  bsEditorInstance!: EditorInstance;
  operation:string = Operation.LIST

  editTempTag = ''

  Post:Post[] = []
  tags:string[]=[]
  tagHandler:any[] = []
  editorOptions!: EditorOption
  markdownText!: string
  PostReading:Post = {
    postDTO:{
      id:'',
      title:'',
      subtitle:'',
      content:'',
      tags:[],
      date:''
    }
  }



  constructor(private postService:PostService,
    private notify:NotificationService,
    private markdownService: MarkdownService,
    private modalService:NgbModal){}

  ngOnInit(): void {
    this.getPost()
    this.getTags()
    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: false,
      onShow: (e) => this.bsEditorInstance = e,
      parser: (val) => this.parse(val)

    };
    this.markdownText = '## mEU PAI ETERNO FUNCIONA PELO AMOR DE DEUS'
  }

  parse(inputValue: string) {
    const markedOutput = this.markdownService.parse(inputValue.trim());
    this.highlight();

    return markedOutput;
  }

  highlight() {
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

  getPost(){
    this.postService.getArticle().subscribe({
        next:(data)=>{
            let dados:any
            dados = data
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

  getTags(){
    this.postService.getTags().subscribe({
      next:(tags)=>{
        this.tags = []
        let tagsTemp:any
        tagsTemp = tags
        tagsTemp.forEach((i:any)=> this.tags.push(i))
      },
      error:(error)=>{
        this.notify.notify({
          message: `Erro:${error.message}`,
          type: NotificationType.ERROR
        })
      }
    })
  }

  buildForm(){
    this.PostReading ={
      postDTO:{
        id:'',
        title:'',
        subtitle:'',
        content:'',
        tags:[],
        date:''
      }
    }
  }

  changeOp(op:string, post:any){
    this.operation = op
    if(op == 'CREATE'){
      this.buildForm();
    } else if(op == 'UPDATE' || op == 'READ'){
      this.PostReading = post
    } else if(op == 'LIST'){
      this.PostReading = {
        postDTO:{
          id:'',
          title:'',
          subtitle:'',
          content:'',
          tags:[],
          date:''
        }
      }
    }
  }

  addtag(tag:string){
    console.log(tag);

    this.PostReading.postDTO.tags.push(tag)
  }

/*   removeTag(tag:string){
    this.tags.splice(...this.tags.filter((i)=>i.tag == tag), 1);
  } */

  tagHandlerUpdate(){
    this.tags.map( i =>
      this.tagHandler.push({
            tag:i,
            operation:Operation.LIST
          }
        )
      )
  }
  modalTagsManager(templateRef:any){
    this.tagHandlerUpdate()
    this.modalService.open(templateRef,{ windowClass: 'dark-modal',scrollable:true })
  }

  editToggle(tag:TagHandler){
    if(tag.operation == Operation.UPDATE || tag.operation == Operation.CREATE){
      tag.operation = Operation.LIST
    }else{
      tag.operation = Operation.UPDATE
      this.editTempTag = tag.tag
    }
  }

  save(data:TagHandler){
    if(data.operation == Operation.UPDATE && data.tag != ''){
    /* Requisição de edição da tag */
    this.postService.putTags(data.tag,this.editTempTag).subscribe({
      next:()=>{
        this.notify.notify({
          message: `Tag ${data.tag} criada com sucesso`,
          type: NotificationType.SUCSESS
        })
      },complete:()=>{
        this.getTags()
        data.operation = Operation.LIST
      }})

    } else if(data.operation == Operation.CREATE && data.tag != ''){
    /* Requisição de criação da tag */
    this.postService.postTags(data.tag).subscribe({
      next:()=>{
        this.notify.notify({
          message: `Tag ${data.tag} criada com sucesso`,
          type: NotificationType.SUCSESS
        })
      },complete:()=>{
        this.getTags()
        data.operation = Operation.LIST
      }
    })
    }else{
      this.tagHandler.pop()
    }
  }

  deleteTag(tag:string){
    /* Requsição de deleção da tag */
    this.postService.deleteTags(tag).subscribe({
      next:()=>{
        this.notify.notify({
          message: `Tag ${tag} deletada com sucesso`,
          type: NotificationType.SUCSESS
        })
      },complete:()=>{
        this.getTags()
        this.tagHandler.splice( this.tagHandler.indexOf(this.tagHandler.find((i)=>i.tag == tag)), 1);
      }
    })
  }

  create(){
    let newTag:TagHandler = {
      tag:'',
      operation:Operation.CREATE
    }
    this.tagHandler.push(newTag)
  }

  createPost(){
    this.postService.postArticle(this.PostReading).subscribe({
      next:()=>{
        this.notify.notify({
          message: `Artigo criado com sucesso`,
          type: NotificationType.SUCSESS
        })
      },complete:()=>{
        this.getPost()
        this.changeOp('LIST',this.PostReading)
      }
    })
  }


}
