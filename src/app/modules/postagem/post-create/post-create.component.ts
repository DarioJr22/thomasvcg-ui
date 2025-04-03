// post-create.component.ts
import { Component, OnInit } from '@angular/core';
import { PostService } from '../postagem.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { NotificationType } from 'src/app/models/notification';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MarkdownService } from 'ngx-markdown';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ImageLoaderService } from 'src/app/services/image.service';
import { CookieService } from 'ngx-cookie-service';
import { Operation } from 'src/app/models/Operation';
import { TagHandler } from 'src/app/models/Post';
import {User} from '../../login/login.component'
import { switchMap } from 'rxjs';

@Component({
  selector: 'tcv-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['../postagem.component.scss']
})
export class PostCreateComponent implements OnInit {
  isLoading = false;
  markdownText = '';
  tags: string[] = [];
  postDTO = {
    title: '',
    subtitle: '',
    content: '',
    tags: [] as string[],
    user:{},
    date: new Date().toISOString()
  };

  constructor(
    private postService: PostService,
    private router: Router,
    private notify: NotificationService,
    private modalService:NgbModal,
    private userService:UsuarioService,
    private cookie:CookieService
  ) { }

  ngOnInit(): void {
    this.loadTags();
    this.userService.validateUserWhenOnCreate()
  }

  loadTags() {
    this.postService.getTags().subscribe({
      next: (tags: any) => this.tags = tags
    });
  }

 


  createPost() {
    this.isLoading = true;
    this.postService.isLoadingUpdate(true)
    let email = JSON.stringify(this.cookie.get('email'))
   email = email.replace(/^"+|"+$/g, '');
    this.userService.getUserByEmail(email).pipe(
      switchMap((userDto)=>{
        this.postDTO.content = this.markdownText;
        this.postDTO.user = userDto
        return this.postService.postArticle(this.postDTO)
      })
    )
   .subscribe({
      next: () => {
        this.notify.notify({
          message: 'Artigo criado com sucesso!',
          type: NotificationType.SUCSESS
        });
        this.router.navigate(['/artigos']);
        this.postService.isLoadingUpdate(false)
      },
      error: (error) => {
        this.notify.notify({
          message: `Erro: ${error.message}`,
          type: NotificationType.ERROR
        });
        this.isLoading = false;
        this.postService.isLoadingUpdate(false)
      },
      complete: () => this.isLoading = false
    });
  }



    addtag(tag:string){
    this.postDTO.tags.includes(tag) ? '' : this.postDTO.tags.push(tag)
    }
  
    removeTag(tag:string){
      this.postDTO.tags.splice(this.postDTO.tags.indexOf(tag), 1);
    }
  
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
    editTempTag = ''
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
    } tagHandler:any[] = []
  
}