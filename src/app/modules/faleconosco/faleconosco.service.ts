import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

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
}
