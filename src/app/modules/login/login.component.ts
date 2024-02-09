import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NotificationType } from 'src/app/models/notification';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NotificationService } from 'src/app/shared/notification/notification.service';
export interface User{
  login:string,
  password:string,
  repeatPassword:string,
  role:string,
  email:string,
  articleWriter:boolean
}
@Component({
  selector: 'tcv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {
  user:User = {
    login:'',
    password:'',
    repeatPassword:'',
    role:'USER',
    email:'',
    articleWriter:false
  }

  state:'login' | 'register' = 'login';

  changeState(){
    if(this.state == 'login'){
      this.state = 'register'
    }else{
      this.state = 'login'
    }
  }
  constructor( private auth:AngularFireAuth,
    private notify:NotificationService,
    private router:Router,
    private userService:UsuarioService) {}

  /**
   * Executes the login process using the provided login and password.
   *
   * @param {string} login - The login for the user.
   * @param {string} password - The password for the user.
   */
  onLogin(
    login:string,
    password:string
  ){
    if(this.formValid(this.user)){
      this.auth.signInWithEmailAndPassword(login, password).then(()=>{
        this.userService.setCurrentUser(this.user)
        this.router.navigate(['/artigos'])
      }).catch((error)=>{
        this.notify.notify({
          message: 'Erro no login do usuário no firebase!',
          type: NotificationType.ERROR,
        })
      })
    }
  }



  /**
   * Registers a new user using the provided login and password.
   *
   * @param {string} login - The login of the user.
   * @param {string} password - The password of the user.
   * @return {Promise} - A promise that resolves with the user object if the registration is successful, otherwise it rejects with an error.
   */
  onRegisterFireBase(
    login:string,
    password:string
  ){

    if(this.formValid(this.user)){
      this.auth
        .createUserWithEmailAndPassword(login, password)
        .then((userCredential) => {
        this.onRegisteApp(this.user);
        })
        .catch((error) => {
          this.notify.notify({
            message: 'Erro no cadastro do usuário no firebase!',
            type: NotificationType.ERROR,
          }
        );
      }
    );
  }else{
    this.notify.notify({
      message: 'Formulário inválido!',
      type: NotificationType.ERROR,
    }
  );
  }
}



  /**
   * Registers an application.
   *
   * @param {User} user - The user object to register.
   */
  onRegisteApp(user:User){
    this.user.login = user.email
    this.userService.registerUser(user).subscribe({
      next:()=>{
        this.userService.setCurrentUser(user)
          this.notify.notify({
            message: "Usuário criado com sucesso!",
            type: NotificationType.SUCSESS
          })
        this.router.navigate(['/artigos'])
      },
      error:(error)=>{
        this.notify.notify({
          message: 'Erro no cadastro do usuário no banco de dados!',
          type: NotificationType.ERROR,
        })
      }
    })
  }

  formValid(user:User){
   let valid = true
    if( this.state == 'register' && user.password != user.repeatPassword){
      valid = false
      this.notify.notify({
        message: 'As senhas devem ser iguais!',
        type: NotificationType.ERROR
      })
    }

    return valid
  }


}
