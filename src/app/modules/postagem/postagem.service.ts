import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { API } from "../../models/config";


@Injectable({
  providedIn:'root'
})

export class PostService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    }),
  };
  constructor(private http:HttpClient) { }

/*   private currentUser:BehaviorSubject<any> = new BehaviorSubject(null)
  public currentUser$ = this.currentUser.asObservable();
  setCurrentUser(user:any){
    this.currentUser.next(user)
  };*/


  //User - Register
  postArticle(user:any){
    return this.http.post(`${API.DEV}/post`,user,this.httpOptions);
  };

  getArticle(){
    return this.http.get(`${API.DEV}/post`,this.httpOptions);
  };

  putArticle(user:any){
    return this.http.put(`${API.DEV}/post`,user,this.httpOptions);
  }


}
