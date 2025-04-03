// post-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PostService } from '../postagem.service';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { NotificationType } from 'src/app/models/notification';
import { Router } from '@angular/router';
import { User } from '../../login/login.component';
import { Post } from 'src/app/models/Post';
import { CookieService } from 'ngx-cookie-service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'tcv-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['../postagem.component.scss']
})
export class PostListComponent implements OnInit {
  isLoading = true;
  searchFilter: any = { title: '' };
  FiteredPosts: any[] = [];
  Post: any[] = [{
    postDTO:{
      id:10,
      date:new Date(),
      title:"Titulo",
      subtitle:"Subtitulo 123123",
      tags:["TAG1","TAG1","TAG1","TAG1" ],
      content:"Conteúdo 12312312"
    }
  }];

  constructor(
    private postService: PostService,
    private notify: NotificationService,
    private router: Router,
    private cookie:CookieService,
     private auth:AngularFireAuth,
     private modalService:NgbModal,

         private userService:UsuarioService,
     
  ) { }

  ngOnInit(): void {
    this.postService.isLoadingUpdate(true)
    this.getPost();
  }

  getPost() {
    this.isLoading = true;
    this.postService.isLoadingUpdate(true)
    this.postService.getArticle().subscribe({
      next: (data: Post[]) => {
          this.Post = []
          data.forEach(post =>{
            if(post.postDTO.id != 2){
              this.Post.push(post)
            }
            
        });
        this.FiteredPosts = this.Post;
        this.postService.isLoadingUpdate(false)
      },
      error: (error) => {
        this.notify.notify({
          message: 'Erro ao buscar artigos!',
          type: NotificationType.ERROR
        });
        this.postService.isLoadingUpdate(false)
      },
      complete: () => this.isLoading = false
    });
  }

  aplicarFiltro() {
    this.FiteredPosts = this.Post.filter((x: any) =>
      x.postDTO.title.toLowerCase().includes(this.searchFilter.title.toLowerCase())
    );
  }

  navigateToPost(id: string) {
    this.router.navigate(['/artigos', id]);
  }

  PostReading:Post = {
    postDTO:{
      id:0,
      title:'',
      subtitle:'',
      content:'',
      tags:[],
      date:'',
      user:null
    }
  }

   user:User = {
      login:'',
      password:'',
      repeatPassword:'',
      role:'USER',
      email:'',
      articleWriter:false
    }

  //Task - Validar o usuário antes de fazer o post
  validateUser(post:Post,modalContent:any){
    //Verifica se o usuário já logou
    let logged = false
    this.user.email = this.cookie.get('email')
    this.user.password = this.cookie.get('senha')

      this.auth
      .signInWithEmailAndPassword(this.user.email, this.user.password)
      .then(()=>{
        //Caso esteja, então segue pra criar o post
        this.navigateToCreate()
      })
      .catch((error) => {
        //se o bonito não tiver logado, então ele abre o modal
        this.openModal(post,modalContent)
      })
    return logged
    //Abre o modal para fazer o login do usuário

  }



  //Modal service
  openModal(post:any,content:any){
    this.modalService
   .open(content,{  modalDialogClass: 'custom-class',scrollable:true })
   .result
   .then((result) => {
   //Caso o cara tenha clicado para logar ele tenta fazer o login
       if (result){
           this.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
           .then(()=>{
             this.userService.setCurrentUser(this.user)
             this.cookie.set('email',this.user.email)
             this.cookie.set('senha',this.user.password)
             this.navigateToCreate()
           })
           .catch((error) => {
             this.notify.notify({
               message: `Erro ao fazer o login :${error.message}`,
               type: NotificationType.ERROR
             })
           })
          }
        }
      )

  }

  navigateToCreate() {
    this.router.navigate(['/artigos/create']);
  }

  navigateToArtigos() {
    this.router.navigate(['/artigos']);
  }
}