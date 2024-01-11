import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { MultCards } from 'src/app/models/cardContent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('profile') profile!: ElementRef;
  @ViewChild('statement') statement!: ElementRef;
  @ViewChild('statementPosition') statementPosition!: ElementRef;


  @HostListener('window:scroll',['$event'])
  onWindowScroll(){
   const profileElementPosition = this.getOffSet(this.profile.nativeElement);
   const statementElementPosition = this.getOffSet(this.statement.nativeElement);
   // Using ViewportScroller to get the scroll position
   const scrollPosition = this.viewPortScroller.getScrollPosition()[1];
    console.log('Posição do elemento',profileElementPosition.top);
    console.log('Posição do depoimentp',statementElementPosition.top);
    console.log('tamanho', this.statement);
    console.log('Posição do scroll',scrollPosition);

  }

  private getOffSet(el:HTMLElement){
    const rect = el.getBoundingClientRect();
    return {
      top:rect.top + window.scrollY,
      left:rect.left + window.scrollX
    }
  }

  private getSize(el:HTMLElement){
    const rect = el.getBoundingClientRect();
    return {
      width:rect.width,
      height:rect.height
    }
  }


  constructor(private renderer:Renderer2,
    private viewPortScroller:ViewportScroller){

    }

  msgZap = 'Eai meu amigo bora me dar esse manei ?'



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
    loop: true,
    perView: 3,
    spacing: 15,
  }


  dadosDepoimento:MultCards = {
    type: 'DEPOIMENTO',
    content: [
        {
          header:'./../../../assets/imgs/icons/telefone.svg',
          main:'Direito Civil',
          footer:'lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium',
          type:'DEPOIMENTO',
          bg:'./../../../assets/imgs/visualComponents/AreaAruacao1.png'
        },
        {
          header:'./../../../assets/imgs/icons/telefone.svg',
          main:'Direito Crimina',
          footer:'lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium',
          type:'DEPOIMENTO',
          bg:'./../../../assets/imgs/visualComponents/AreaAruacao2.png'
        },
        {
          header:'./../../../assets/imgs/icons/telefone.svg',
          main:'Direito Trabalhista',
          footer:'lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium',
          type:'DEPOIMENTO',
          bg:'./../../../assets/imgs/visualComponents/AreaAruacao3.png'
        },
        {
          header:'./../../../assets/imgs/icons/telefone.svg',
          main:'Direito Empresarial',
          footer:'lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium',
          type:'DEPOIMENTO',
          bg:'./../../../assets/imgs/visualComponents/AreaAruacao1.png'
        }
      ],
    mode: 'free',
    loop: true,
    perView: 3,
    spacing: 15,
  }
}
