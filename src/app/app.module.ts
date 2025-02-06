import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { getAuth, provideAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { enviroment } from './enviroments/enviroments';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './modules/login/login.module';
import { SharethisAngularModule } from 'sharethis-angular';
import { NotfoundComponent } from './modules/notfound/notfound.component';


@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    provideAuth(() => getAuth()),
    HttpClientModule,
    LoginModule,
    SharethisAngularModule


  ],
  providers: [
    UsuarioService,
   HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
