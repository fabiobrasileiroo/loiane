import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private  alunos: any[] = [
    {id: 1, nome: 'aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'aluno 02', email: 'aluno01@email.com'},
    {id: 3, nome: 'aluno 03', email: 'aluno01@email.com'},

  ]
  constructor() { }
  getAlunos() {
    return this.alunos
  }
  getAluno(id:number) {
    for (let i = 0; i<this.alunos.length;i++) {
      let aluno = this.alunos[i];
      if(aluno.id == id) {
        return aluno;
      }
    }
    return null
  }
}
