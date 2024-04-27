import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
/*
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
*/
import { CursosService } from './cursos/cursos.service';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    /*
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
    */
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // CursosModule,
    // AlunosModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CursosService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
