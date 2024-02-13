import { Component, OnInit } from '@angular/core';
import { FaleConosco, RelationShip } from 'src/app/models/faleConosco';
import { FaleConoscoService } from './faleconosco.service';

@Component({
  selector: 'app-faleconosco',
  templateUrl: './faleconosco.component.html',
  styleUrls: ['./faleconosco.component.scss']
})
export class FaleConoscoComponent implements OnInit {
 //

 contatoModel:FaleConosco = {
    costumerName:'',
    relationship:RelationShip.SOLTEIRO,
    email:'',
    contact:'',
    birtday:'',
    cpf:'',
    rg:'',
    address:{
      street:'',
      number:'',
      district:'',
      cep:'',
      invalidCep:false,
      complement:'',
      city:'',
      uf:''
    },
    User:{
      login:'',
      password:'',
      repeatPassword:'',
      role:'',
      email:'',
      articleWriter:false
    },
    descricao:''
}

UF:string[] = []




constructor(
  private contatoService:FaleConoscoService
) {

}
  ngOnInit(): void {
  this.getUF()
  }


  getUF(){
    this.contatoService.getUF().subscribe(
      {
        next:(data:any)=>{
          let dados = []
          dados = data
          dados.forEach((i:any) => {this.UF.push(i.sigla)});
        },
        error:(error)=>{
          console.error(error)
        }
      }
    )
  }
getCep(cep:any){
cep.toString()
this.contatoModel.address.invalidCep = false
  if (cep.length == 8) {
    this.contatoService.getCep(cep).subscribe(
      {
        next:(data:any)=>{
          this.contatoModel.address.uf = data.uf
          this.contatoModel.address.street = data.logradouro
          this.contatoModel.address.district = data.bairro
          this.contatoModel.address.complement = data.complemento
          this.contatoModel.address.city = data.localidade
          if(data.erro){
            this.contatoModel.address.invalidCep = true
          }
        },
        error:(error)=>{
          this.contatoModel.address.invalidCep = true

        }

      }
    )
  }

}


}
