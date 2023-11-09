import { AfterViewInit, Component, ElementRef, Input, OnDestroy, Output, ViewChild, EventEmitter } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { MultCards } from 'src/app/models/cardContent';



@Component({
  selector: 'tc-multi-cards',
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.scss']
})
export class MultiCardsComponent implements AfterViewInit, OnDestroy{


  @ViewChild('sliderRef') sliderRef!:ElementRef<HTMLElement>
  @ViewChild('slideRefAreas') slideRefAreas!:ElementRef<HTMLElement>

  @Input() dados!:MultCards


  slider!:KeenSliderInstance
  sliderAreas!:KeenSliderInstance


  frasesAtuacao!:string


  @Output() mes:EventEmitter<any> = new EventEmitter();


  ngAfterViewInit(): void {

    if(this.dados.type == 'DEPOIMENTO'){
      this.slider = new KeenSlider(this.sliderRef.nativeElement,
        {
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
              slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 1000px)": {
              slides: { perView: 3, spacing: 10 },
            },
          },
          slides: { perView: 1 },
          slideChanged:(s) =>{
            let n:number = s.track.details.rel
           this.frasesAtuacao =  this.dados.content[n].footer
          }
        }
      )

    }

    this.frasesAtuacao =  this.dados.content[0].footer

  }

  ngOnDestroy(): void {
    if (this.slider) this.slider.destroy()
  }
  @Output() selectCard:EventEmitter<any> = new EventEmitter()

  selectCardMes(e:any){
    this.selectCard.emit(e)
  }


  }
