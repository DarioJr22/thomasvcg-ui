import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, throwError } from "rxjs";
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
    return this.http.post(`${API.PROD}/post`,user,this.httpOptions);
  };

  getArticle(){
    return this.http.get(`${API.PROD}/post`,this.httpOptions);
  };

  getTags(){
    return this.http.get(`${API.PROD}/post/tags`,this.httpOptions)
  }

  putArticle(user:any){
    return this.http.put(`${API.PROD}/post`,user,this.httpOptions);
  }

  postTags(tag:string){
    return this.http.post(`${API.PROD}/post/tags/${tag}`,{},this.httpOptions)
  }

  putTags(newTag:string,oldTag:string){
    return this.http.put(`${API.PROD}/post/tags`,{
      newTag:newTag,
      oldTag:oldTag
    },this.httpOptions)
  }

  deleteTags(tag:string){
    return this.http.delete(`${API.PROD}/post/tags/${tag}`,this.httpOptions)
    .pipe(
      catchError(error => {
        console.error('Erro ao processar a resposta:', error);
        return throwError('Erro ao processar a resposta do servidor.');
      })
    );
  }


}
