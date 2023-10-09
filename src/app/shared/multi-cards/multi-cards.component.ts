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
  @Input() dados!:MultCards
  slider!:KeenSliderInstance
  @Output() mes:EventEmitter<any> = new EventEmitter();


  ngAfterViewInit(): void {
   this.slider = new KeenSlider(this.sliderRef.nativeElement,
    {
      loop:this.dados.loop,
      mode:'free',
      slides:{
        perView:this.dados.perView,
        spacing:this.dados.spacing
      }
    })
    console.log(this.dados);

  }

  ngOnDestroy(): void {
    if (this.slider) this.slider.destroy()
  }
  @Output() selectCard:EventEmitter<any> = new EventEmitter()

  selectCardMes(e:any){
    this.selectCard.emit(e)
  }
  }
