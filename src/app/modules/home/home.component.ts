import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CardContent, MultCards } from 'src/app/models/cardContent';
import { HomeService } from './home.service';
import { Reviews } from '../../models/reviews';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageLoaderService } from 'src/app/services/image.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reviews:Reviews[] = [];
  @ViewChild('profile') profile!: ElementRef;
  @ViewChild('statement') statement!: ElementRef;
  @ViewChild('statementPosition') statementPosition!: ElementRef;
  isLoading = true





  constructor(private renderer:Renderer2,
    private viewPortScroller:ViewportScroller,
    private homeService:HomeService,
    private modalService:NgbModal,
    private imageService:ImageLoaderService,
    private router:Router

    ) {
      this.loadingService()
    }

  loadingService(){


      let loadSubBreaking = this.imageService.timeBreakingImages(500).subscribe(n => {
      if(n === 1){
        this.isLoading = false
        loadSubBreaking.unsubscribe()
      }
    })
  }
  ngOnInit(): void {
   this.getReviews()

  }
  //Falar com thomas sobre mensagem automática na tela inicial
  msg = 'Olá, gostaria de saber mais sobre os serviços do escritório.\n'
  frasesInicio = [
    "Prisões em flangrante",
    "Divórcios",
    "Aposentadorias",
    "Pensão por morte",
    "Pensão alimentícia",
    "Acusação de tráfico",
    "Acusação de Maria da Penha",
    "BPC LOAS"
  ]
  modalContent = {
    title:'Area de atuação',
    content:'',
    icon:''
  }

  dadosAreaAtuacao:MultCards ={
    type: 'ATUACAO',
    content: [
        {
          header:'./../../../assets/imgs/icons/criminal.svg',
          main:'Criminal',
          footer:'Atuamos de forma preventiva, a fim de evitar que você venha a ser processado criminalmente; bem como atuamos na defesa dos seus interesses, durante a investigação, quanto durante o processo',
          type:'ATUACAO',
          bg:'./../../../assets/imgs/visualComponents/criminal.svg'
        },
        {
          header:'./../../../assets/imgs/icons/familia.svg',
          main:'Família',
          footer:'Situações envolvendo relações familiares como divórcios, guarda, alimentos, etc. Adotamos uma abordagem inicial conciliatória a fim de assegurar serenidade emocional para os envolvidos e rapidez no processo',
          type:'ATUACAO',
          bg:'./../../../assets/imgs/visualComponents/familia.svg'
        },
        {
          header:'./../../../assets/imgs/icons/previdenciario.svg',
          main:'Previdenciário',
          footer:'Situações envolvendo benefícios junto ao INSS e, caso necessário, recorrendo à Justiça',
          type:'ATUACAO',
          bg:'./../../../assets/imgs/visualComponents/previdenciario.svg'
        },
        {
          header:'./../../../assets/imgs/icons/eleitoral.svg',
          main:'Eleitoral',
          footer:'Situações envolvendo disputas eleitorais, tanto na defesa, quanto na acusação. Também fazemos assessoria preventiva a fim de evitar maiores gastos financeiros e riscos junto à Justiça Eleitoral.',
          type:'ATUACAO',
          bg:'./../../../assets/imgs/visualComponents/eleitoral.svg'
        },
        {
          header:'./../../../assets/imgs/icons/trabalho.svg',
          main:'Trabalhista',
          footer:'Situações envolvendo conflitos no emprego, readmissões, indenizações etc. Igualmente atuamos junto às empresas de forma preventiva e contenciosa.',
          type:'ATUACAO',
          bg:'./../../../assets/imgs/visualComponents/trabalhista.svg'
        },
        {
          header:'./../../../assets/imgs/icons/Administrativo.svg',
          main:'Administrativo',
          footer:'Situações envolvendo o governo e seus funcionários, bem como particulares, tais como enquadramentos profissionais, garantias funcionais, concursos, etc.',
          type:'ATUACAO',
          bg:'./../../../assets/imgs/visualComponents/administrativo.svg'
        },
        {
          header:'./../../../assets/imgs/icons/civil.svg',
          main:'Civil',
          footer:'Situações da vida cotidiana, como cobranças, alugueis, vendas, direitos de uso, direitos sobre imóveis, relações em condomínios, etc.',
          type:'ATUACAO',
          bg:'./../../../assets/imgs/visualComponents/civil.svg'
        }
      ],
    mode: 'free',
    loop: false,
    perView: 3,
    spacing: 20,
  }


    /* Reviews */
    getReviews(){
      this.homeService.getReviews().subscribe(
      {
        next:(data:any)=>{
          this.reviewsConverter(JSON.parse(data.body))



        },
        error:(error)=>{console.error(error)},

      }
    )

  /*
    let url = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJLaOg3Tc9qwcRTemoMuGJ6Rc&key=AIzaSyASuNXEP27EUkWhCHt7UzJVYuy7bc5HxVA';
    fetch( url)
    .then(response => response.json())
    .then(contents => console.log(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?")) */
  }

  reviewsConverter(reviews:any){
  let reviewsTemp = []
  reviewsTemp = reviews.result.reviews
  reviewsTemp.forEach((i:any) => {
        this.reviews.push(i)
      }
    );

  this.reviews.forEach((i)=>{
    i.rating = Array(i.rating).fill(i.rating).map((x,y)=>y)
  })
  }

  selectCard(template:any,dados:CardContent){

    this.modalContent.title = dados.main
    this.modalContent.content = dados.footer
    this.modalContent.icon = dados.header
    this.modalService.open(template,{
      scrollable:true,
      modalDialogClass: 'custom-class',
      centered: true
     })
  }
}
