import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { API, Config } from "../models/config";
import { CookieService } from "ngx-cookie-service";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Post } from "../models/Post";
import { Router } from "@angular/router";


@Injectable({
  providedIn:'root'
})

export class UsuarioService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    }),
  };
  constructor(private http:HttpClient,
        private cookie:CookieService,
         private auth:AngularFireAuth,
         private router:Router
  ) { }

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



validateUserWhenOnCreate(){
    let email = this.cookie.get('email')
    let password = this.cookie.get('senha')
      this.auth
      .signInWithEmailAndPassword(email, password)
      .then(()=>{
        
      })
      .catch((error) => {
       this.navigateToArtigos()
      })
  }

  formatCookieEmail(str:string){
    return str.replace(/^"+|"+$/g, '')
  }

  async isUserLoggedIn(){
    let email = this.formatCookieEmail(JSON.stringify(this.cookie.get('email')))
    let password = this.cookie.get('senha')
    let IsLoggedIn = false
     await this.auth.signInWithEmailAndPassword(email, password)
      .then(()=>{
        IsLoggedIn = true
      })
      .catch((error) => {
        IsLoggedIn = false
      })
      console.log(IsLoggedIn);
      
      return IsLoggedIn
  }

  getUserByEmail(email:string){
    return this.http.get(`${API.PROD}/user/email/${email}`)
  }

  navigateToArtigos() {
    this.router.navigate(['/artigos']);
  }


}
