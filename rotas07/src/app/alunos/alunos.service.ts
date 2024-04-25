import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private  alunos: any[] = [
    {id: 1, nome: 'aluno', email: 'aluno01@email.com'},
    {id: 1, nome: 'aluno', email: 'aluno01@email.com'},
    {id: 1, nome: 'aluno', email: 'aluno01@email.com'},

  ]
  getAlunos() {
    return this.alunos
  }
  constructor() { }
}
