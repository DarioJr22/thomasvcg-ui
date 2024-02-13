import { User } from "../modules/login/login.component";

export interface FaleConosco{
  costumerName:string,
  relationship:RelationShip,
  email:string,
  contact:string,
  birtday:string,
  cpf:string,
  rg:string,
  address:Address,
  descricao:string,
  User:User
}


export enum RelationShip{
  SOLTEIRO = 'SOLTEIRO',
  CASADO = 'CASADO',
  DIVORCIADO = 'DIVORCIADO',
  VIUVO = 'VIUVO'
}

export interface Address{
  street:string,
  number?:number |string,
  district:string,
  cep:string,
  invalidCep:boolean,
  complement:string,
  city:string,
  uf:string
}
