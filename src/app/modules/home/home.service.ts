import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API } from "src/app/models/config";
import { ContactDTO, CostumerDTO } from "src/app/models/faleConosco";

@Injectable({
  providedIn: 'root'
})

export class HomeService{

  placeId = 'ChIJLaOg3Tc9qwcRTemoMuGJ6Rc'
  KEY = 'AIzaSyASuNXEP27EUkWhCHt7UzJVYuy7bc5HxVA'


  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    }),
  };
  constructor(private http:HttpClient) { }

  //GET
//https://mybusiness.googleapis.com/v4/accounts/thomasvcg-5e3ce/locations/ChIJLaOg3Tc9qwcRTemoMuGJ6Rc/reviews
// Para conseguir todas as reviews vice tem que se autenticar nessa apo aí acima.
  getReviews(){
   return this.http.get(`${API.DEV}/user/reviews`,this.httpOptions)
  }

}
