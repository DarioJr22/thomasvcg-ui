import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


Injectable({
  providedIn:'root'
})

export class UsuarioService {


  constructor() { }

  private currentUser:BehaviorSubject<any> = new BehaviorSubject(null)
  public currentUser$ = this.currentUser.asObservable();

  setCurrentUser(user:any){
    this.currentUser.next(user)
  };



}
