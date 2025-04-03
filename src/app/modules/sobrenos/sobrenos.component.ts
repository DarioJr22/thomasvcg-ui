import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { KeenSliderInstance } from 'keen-slider';
import { CardContent, MultCards } from 'src/app/models/cardContent';
import KeenSlider from 'keen-slider';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs'
import { ImageLoaderService } from 'src/app/services/image.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.component.html',
  styleUrls: ['./sobrenos.component.scss'],
  animations: [
    trigger('fadeInTop',[
      transition('* => *',[
        animate('0.1s',keyframes([
        style({
          transform:'translate(10px)',
          opacity:0
        }),
        style({
          transform:'translate(-0px)',
          opacity:1
        })]
        )
        ),
      ])
    ])

  ]
})
export class SobrenosComponent implements AfterViewInit{
  msg = 'Olá, gostaria de saber mais sobre os serviços do escritório.'
  modalContent:CardContent = new CardContent()
  isLoading = true

  constructor(
    private router:Router,
    private imageService:ImageLoaderService,
  private modalService:NgbModal) {

      this.loadingService()
     }
  number:number = 0
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  slider!: KeenSliderInstance
  loadingService(){
    this.imageService.waitForImagesToLoad().subscribe(()=>{
      this.isLoading = false
    })

    let loadSubBreaking = this.imageService.timeBreakingImages(500).subscribe(n => {
    if(n === 5){
      this.isLoading = false
      loadSubBreaking.unsubscribe()
    }
  })}

  openModal(content:any,i:any){
    this.modalContent.main = i.main
    this.modalContent.header = i.header
    this.modalContent.info = i.info
    this.modalService.open(content,
        {
          modalDialogClass: 'custom-class',
          scrollable:true
        }
      )
  }
  ngAfterViewInit() {

    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 4,
        spacing: 10
      },
      slideChanged:(s) =>{
       this.number = s.track.details.rel



      //INSERIR AQUI A LOGICA PRA MUDAR O TAMANHO DO CARD
     }
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
      dadosAreaAtuacao:MultCards ={
        type: 'ELENCO',
        content: [
            {
              header:'https://ik.imagekit.io/b44ooyk8l/ThomasVcg/Elenco/ThomasPhoto.jpg?updatedAt=1738792192963',
              main:'Thomas Crisóstomo',
              footer:'Advogado criminalista',
              type:'ELENCO',
              bg:'https://ik.imagekit.io/b44ooyk8l/ThomasVcg/ElementosVisuais/AreaAruacao1.png?updatedAt=1738792242806',
              info:'Graduado em Direito pela Faculdade de Olinda; licenciando em Ciências Sociais pela Universidade de Pernambuco, pós em Ciências Penais pela Escola Superior da Advocacia.'
            },
            {
              header:'https://ik.imagekit.io/b44ooyk8l/ThomasVcg/Elenco/Ayanne.jpg?updatedAt=1738792169315',
              main:'Ayanne Andrade Oliveira',
              footer:'Especialita em Direito da família',
              type:'ELENCO',
              bg:'https://ik.imagekit.io/b44ooyk8l/ThomasVcg/ElementosVisuais/AreaAruacao1.png?updatedAt=1738792242806',
              info:'Advogada formada pela Universidade Católica de Pernambuco Pós-graduada em Direito de Família e Sucessões pela Escola Brasileira de Direito/SP Mediadora e Conciliadora formada pelo Tribunal de Justiça de Pernambuco'
            },
            {
              header:'https://ik.imagekit.io/b44ooyk8l/ThomasVcg/Elenco/matheus.jpg?updatedAt=1738792168069',
              main:'Matheus Souza',
              footer:'Advogado',
              type:'ELENCO',
              bg:'https://ik.imagekit.io/b44ooyk8l/ThomasVcg/ElementosVisuais/AreaAruacao1.png?updatedAt=1738792242806',
              info:'Matheus Souza Lira da Silva, advogado formado pela AESO - Faculdades Integradas Barros Melo, Pós graduado em direito e processo do trabalho pela Faculdade CERS.'
            }
          ],
        mode: 'free',
        loop: true,
        perView: 2,
        spacing: 15,
      }


}
