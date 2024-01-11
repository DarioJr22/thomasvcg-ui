import { Component } from '@angular/core';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

@Component({
  selector: 'tcv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  getAuth = getAuth();

  onLogin(){

  }

  onRegister(auth = getAuth(),email:string,password:string){
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{

    })
  }
}
