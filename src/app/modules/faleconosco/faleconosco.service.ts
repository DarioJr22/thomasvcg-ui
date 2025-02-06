import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API } from "src/app/models/config";
import { ContactDTO, CostumerDTO } from "src/app/models/faleConosco";

@Injectable({
  providedIn: 'root'
})

export class FaleConoscoService{


  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    }),
  };
  constructor(private http:HttpClient) { }

  getCep(cep:string){
   return this.http.get(`https://viacep.com.br/ws/${cep}/json`)
  }

  getUF(){
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  }

  postContact(contact:ContactDTO){
   return this.http.post(`${API.PROD}/contact/costumer/${contact.costumer?.id}`,contact,this.httpOptions)
  }

  postCostumer(costumer:CostumerDTO){
    return this.http.post(`${API.PROD}/costumer/user/1`,costumer,this.httpOptions)

  }
}
