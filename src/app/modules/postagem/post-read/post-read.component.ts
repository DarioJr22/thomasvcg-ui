// post-read.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../postagem.service';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { NotificationType } from 'src/app/models/notification';
import { InlineShareButtonsConfig } from 'sharethis-angular';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'tcv-post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['../postagem.component.scss']
})
export class PostReadComponent implements OnInit {
  isLoading = true;
  isLoggedIn = false
  postDTO = {
    id:0,
    title: '',
    subtitle: '',
    content: '',
    tags: [] as string[],
    user:{},
    date: new Date().toISOString()
  };

  constructor(
        private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private notify: NotificationService,
    private userService: UsuarioService
  ) { }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadPost(params['id']);
    });

    this.isLoggedIn = await this.userService.isUserLoggedIn()

  }


  deletePost(id:number){
    this.postService.deletePostByID(id).subscribe(
      {
        next:()=>{
          
          this.notify.notify({
            message: 'artigo deletado com sucesso !',
            type: NotificationType.SUCSESS
          });

          this.navigateToArtigos()
        },

        error:(error)=>{
          this.notify.notify({
            message: 'Erro ao deletar post!',
            type: NotificationType.ERROR
          });
        }
        
      }
    )
  }

  loadPost(id: string) {
    this.postService.isLoadingUpdate(true)
    this.postService.getArticleById(parseInt(id)).subscribe({
      next: (data: any) => {
        this.postDTO = data;
        console.log(this.postDTO);
        this.postService.isLoadingUpdate(false)
        if (!this.postDTO) {
          this.notify.notify({
            message: 'Post não encontrado',
            type: NotificationType.ERROR
          });
        }
      },
      error: (error) => {
        this.notify.notify({
          message: 'Erro ao carregar post',
          type: NotificationType.ERROR
        });
        this.isLoading = false;
        this.navigateToArtigos()
        this.postService.isLoadingUpdate(false)
      },
      complete: () => this.isLoading = false
    });
  }

  share(string:'share'|'follow') {
    const InlineShareButtonsConfig:InlineShareButtonsConfig = {
      alignment: 'center', // alignment of buttons (left, center, right)
      color: 'social', // set the color of buttons (social, white)
      enabled: true, // show/hide buttons (true, false)
      font_size: 16, // font size for the buttons
      labels: 'cta', // button labels (cta, counts, null)
      language: 'pt', // which language to use (see LANGUAGES)
      networks: [
        // which networks to include (see SHARING NETWORKS)
        'whatsapp',
        'linkedin',
        'facebook',
        'twitter'
      ],
      padding: 12, // padding within buttons (INTEGER)
      radius: 4, // the corner radius on each button (INTEGER)
      show_total:false,
      size: 35, // the size of each button (INTEGER)

      // OPTIONAL PARAMETERS

      url: window.location.href, // (defaults to current url)
      image: 'https://media.licdn.com/dms/image/D4D03AQGKKoWsExMXcg/profile-displayphoto-shrink_800_800/0/1694563177611?e=1718236800&v=beta&t=wzmESHXILy6fylqjL3VrFqhUIDdwZ5NYwdcps5QeiLc', // (defaults to og:image or twitter:image)
      description: 'Confira o artigo pesquisando pelo titulo na página da url.', // (defaults to og:description or twitter:description)
      title: this.postDTO.title, // (defaults to og:title or twitter:title)
      message: this.postDTO.subtitle, // (only for email sharing)
      subject: this.postDTO.title, // (only for email sharing)
    };
    return InlineShareButtonsConfig
  }

  navigateToArtigos() {
    this.router.navigate(['/artigos']);
  }
}