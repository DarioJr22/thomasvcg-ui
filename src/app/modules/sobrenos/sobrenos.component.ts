import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { KeenSliderInstance } from 'keen-slider';
import { MultCards } from 'src/app/models/cardContent';
import KeenSlider from 'keen-slider';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

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
  number:number = 0
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>
  slider!: KeenSliderInstance
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
              header:'./../../../assets/imgs/elenco/ThomasPhoto.jpg',
              main:'Thomas Crisóstomo',
              footer:'Especialista x',
              type:'ELENCO',
              bg:'./../../../assets/imgs/visualComponents/AreaAruacao1.png'
            },
            {
              header:'./../../../assets/imgs/elenco/ThomasPhoto.jpg',
              main:'Thomas Crisóstomo',
              footer:'Especialista x',
              type:'ELENCO',
              bg:'./../../../assets/imgs/visualComponents/AreaAruacao1.png'
            },
            {
              header:'./../../../assets/imgs/elenco/ThomasPhoto.jpg',
              main:'Thomas Crisóstomo',
              footer:'Especialista x',
              type:'ELENCO',
              bg:'./../../../assets/imgs/visualComponents/AreaAruacao1.png'
            },
            {
              header:'./../../../assets/imgs/elenco/ThomasPhoto.jpg',
              main:'Thomas Crisóstomo',
              footer:'Especialista x',
              type:'ELENCO',
              bg:'./../../../assets/imgs/visualComponents/AreaAruacao1.png'
            },
          ],
        mode: 'free',
        loop: true,
        perView: 4,
        spacing: 15,
      }


}
