import { Component, OnInit } from '@angular/core';
import { ContactDTO, CostumerDTO, RelationShip } from 'src/app/models/faleConosco';
import { FaleConoscoService } from './faleconosco.service';

@Component({
  selector: 'app-faleconosco',
  templateUrl: './faleconosco.component.html',
  styleUrls: ['./faleconosco.component.scss']
})
export class FaleConoscoComponent implements OnInit {
 //

  msgZap = '';

 contactModel:ContactDTO = {
   contact_content:'',
   arq_content:'',
   costumer: undefined
 }
 costumerModel:CostumerDTO = {
    id:undefined,
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
    this.msgZap =`\n
    Contato feito pelo site !
    `
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
this.costumerModel.address.invalidCep = false
  if (cep.length == 8) {
    this.contatoService.getCep(cep).subscribe(
      {
        next:(data:any)=>{
          this.costumerModel.address.uf = data.uf
          this.costumerModel.address.street = data.logradouro
          this.costumerModel.address.district = data.bairro
          this.costumerModel.address.complement = data.complemento
          this.costumerModel.address.city = data.localidade
          if(data.erro){
            this.costumerModel.address.invalidCep = true
          }
        },
        error:(error)=>{
          this.costumerModel.address.invalidCep = true

        }

      }
    )
  }

}

sendContact(){
  this.postCostumer()

}


postCostumer(){
  this.contatoService.postCostumer(this.costumerModel).subscribe(
    {
      next:(data:any)=>{
        console.log('Cliente criado',data);

        this.postContact(this.contactModel, data.costumer)
      },
      error:(error)=>{

      }
    }
  )
}


postContact(contactModel:ContactDTO,costumer:CostumerDTO){
  contactModel.costumer = costumer
  contactModel.contact_content = this.costumerModel.descricao
  contactModel.arq_content = this.costumerModel.descricao
  this.contatoService.postContact(contactModel).subscribe({
    next:(data:any)=>{
      console.log('contato criado',data)
    },
    error:(error)=>{
      console.error(error)
    }
  })
}
sendWhatsapp(){

}

}
