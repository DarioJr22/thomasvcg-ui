import { Component } from '@angular/core';
import { MultCards } from 'src/app/models/cardContent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {



  dadosAreaAtuacao:MultCards ={
    type: 'ATUACAO',
    content: [
        {
          header:'./../../../assets/imgs/icons/telefone.svg',
          main:'Direito Civil',
          footer:'lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium',
          type:'ATUACAO',
          bg:'./../../../assets/imgs/visualComponents/AreaAruacao1.png'
        },
        {
          header:'./../../../assets/imgs/icons/telefone.svg',
          main:'Direito Crimina',
          footer:'lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium',
          type:'ATUACAO',
          bg:'./../../../assets/imgs/visualComponents/AreaAruacao2.png'
        },
        {
          header:'./../../../assets/imgs/icons/telefone.svg',
          main:'Direito Trabalhista',
          footer:'lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium',
          type:'ATUACAO',
          bg:'./../../../assets/imgs/visualComponents/AreaAruacao3.png'
        },
        {
          header:'./../../../assets/imgs/icons/telefone.svg',
          main:'Direito Empresarial',
          footer:'lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium',
          type:'ATUACAO',
          bg:'./../../../assets/imgs/visualComponents/AreaAruacao1.png'
        }
      ],
    mode: 'free',
    loop: false,
    perView: 4,
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
    loop: false,
    perView: 3,
    spacing: 15,
  }
}
