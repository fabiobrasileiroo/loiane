import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
<<<<<<< HEAD

  private alunos: any[] = []
=======
  
  protected alunos: any[] = []
>>>>>>> refs/remotes/origin/main

  constructor(private alunosService: AlunosService) {

  }
  ngOnInit() {
    this.alunos = this.alunosService.getAlunos()
  }
}
