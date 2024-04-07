import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { API, Config } from "../models/config";


@Injectable({
  providedIn:'root'
})

export class UsuarioService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    }),
  };
  constructor(private http:HttpClient) { }

  private currentUser:BehaviorSubject<any> = new BehaviorSubject(null)
  public currentUser$ = this.currentUser.asObservable();

  setCurrentUser(user:any){
    this.currentUser.next(user)
  };

  getCurrentUser(){
    return this.currentUser.value
  }

  //User - Register
  registerUser(user:any){
    return this.http.post(`${API.PROD}/user`,user,this.httpOptions);
  };






}
