import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent {

  cursos: string[] = [];
  //cursosService: CursosService;// declarei um variavel do tipo CursosService

  constructor(private cursosService: CursosService) { // construtor é o primeiro a ser inicializado, porque ele que constroi a aplicacao
    //this.cursosService = new CursosService() // instanciei
    //this.cursosService = _cursosService
  }

  ngOnInit() { // executado quando classe for inicializada
    this.cursos = this.cursosService.getCursos()

    CursosService.CriouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    )
  }
}
