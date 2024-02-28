import { keyframes, style, transition, trigger,animate } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, Output, ViewChild, EventEmitter, HostListener } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { MultCards } from 'src/app/models/cardContent';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'tc-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.scss'],
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
export class MultiCardsComponent implements AfterViewInit, OnDestroy{
  @ViewChild('sliderRef') sliderRef!:ElementRef<HTMLElement>
  @ViewChild('slideRefAreas') slideRefAreas!:ElementRef<HTMLElement>
  @Input() dados!:MultCards
  cardIndex:number = 0
  slider!:KeenSliderInstance
  sliderAreas!:KeenSliderInstance
  currentSlide:number = 0
  resizeWindow:number = 0
  frasesAtuacao!:string
  @Output() mes:EventEmitter<any> = new EventEmitter();
  @Output() selectedCard:EventEmitter<any> = new EventEmitter();

  @HostListener('window:load', ['$event'])
  @HostListener('window:resize',['$event'])
  onWindowResize(){
     this.resizeWindow = window.innerWidth;
     const buttons = document.querySelector('.controlButtons') as HTMLElement
    if(this.resizeWindow <= 768){
      this.slideRefAreas.nativeElement.style.display = 'none'
       buttons.style.display = 'none'
    }else if(this.resizeWindow >= 768){
      this.slideRefAreas.nativeElement.style.display = 'flex'
      buttons.style.display = 'flex'
    }


  }

  constructor(
    private cdr: ChangeDetectorRef
  ){

  }

  ngAfterViewInit(): void {

    if(this.dados.type == 'ELENCO'){
        this.slider = new KeenSlider(this.sliderRef.nativeElement,{
          loop:this.dados.loop,
          mode:'free',
          slides:{
            perView:this.dados.perView,
            spacing:this.dados.spacing
          }
        })
    } else if (this.dados.type == 'ATUACAO'){
      this.sliderAreas = new KeenSlider(
        this.slideRefAreas.nativeElement, {
          loop:true,

          breakpoints: {
            "(min-width: 400px)": {
              slides: {
                perView: 3,
                spacing: 10,

              }
              ,
            },
            "(min-width: 1000px)": {
              slides: {
                perView: 5,
                spacing: 10,

              },
            },
          },
          slideChanged:(s) =>{
             this.cardIndex = s.track.details.rel
             this.frasesAtuacao =  this.dados.content[this.cardIndex].footer






           //INSERIR AQUI A LOGICA PRA MUDAR O TAMANHO DO CARD
          },

        }
      )

    }

    this.frasesAtuacao =  this.dados.content[0].footer
/* this.cdr.detectChanges(); */
  }

  ngOnDestroy(): void {
    if (this.slider) this.slider.destroy()
    if (this.sliderAreas) this.sliderAreas.destroy()
  }

  selectCard(e:any){
    this.selectedCard.emit(e)
  }



   typeWriter(el:any) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter:any, i:number) =>
        setTimeout(() => (el.innerHTML += letter), 100)
    );
  }



  }
