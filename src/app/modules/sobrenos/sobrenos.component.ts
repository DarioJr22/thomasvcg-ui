import { Component } from '@angular/core';
import { MultCards } from 'src/app/models/cardContent';

@Component({
  selector: 'app-sobrenos',
  templateUrl: './sobrenos.component.html',
  styleUrls: ['./sobrenos.component.scss']
})
export class SobrenosComponent {
      dadosAreaAtuacao:MultCards ={
        type: 'ATUACAO',
        content: [
            {
              header:'./../../../assets/imgs/icons/telefone.svg',
              main:'Criminal',
              footer:'Atuamos de forma preventiva, a fim de evitar que você venha a ser processado criminalmente; bem como atuamos na defesa dos seus interesses, durante a investigação, quanto durante o processo',
              type:'ATUACAO',
              bg:'./../../../assets/imgs/visualComponents/AreaAruacao1.png'
            },
            {
              header:'./../../../assets/imgs/icons/telefone.svg',
              main:'Família',
              footer:'Situações envolvendo relações familiares como divórcios, guarda, alimentos, etc. Adotamos uma abordagem inicial conciliatória a fim de assegurar serenidade emocional para os envolvidos e rapidez no processo.',
              type:'ATUACAO',
              bg:'./../../../assets/imgs/visualComponents/AreaAruacao2.png'
            },
            {
              header:'./../../../assets/imgs/icons/telefone.svg',
              main:'Família',
              footer:'Situações envolvendo relações familiares como divórcios, guarda, alimentos, etc. Adotamos uma abordagem inicial conciliatória a fim de assegurar serenidade emocional para os envolvidos e rapidez no processo.',
              type:'ATUACAO',
              bg:'./../../../assets/imgs/visualComponents/AreaAruacao3.png'
            },
            {
              header:'./../../../assets/imgs/icons/telefone.svg',
              main:'Família',
              footer:'lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium lorem ipsium',
              type:'ATUACAO',
              bg:'./../../../assets/imgs/visualComponents/AreaAruacao1.png'
            },

            {
              header:'./../../../assets/imgs/icons/telefone.svg',
              main:'Família',
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


}
