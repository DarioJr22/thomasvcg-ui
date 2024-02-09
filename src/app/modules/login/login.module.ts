import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from 'src/app/shared/notification/notification.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers:[
    UsuarioService,
    NotificationService

  ]
})
export class LoginModule { }
