import { Component } from '@angular/core';
import { Observable,interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos com JavaScript: Escreva um Código JavaScript Complexo e Eficaz Usando a Mais Recente ECMAScript ',
    rating: 4.9,
    numeroPaginas: 408,
    preco: 93.65,
    dataLancamento: new Date(2019, 2, 11),
    url: 'https://a.co/d/5RzkYVu'
  };
  livros: string[] = ['livro1','livro2'] 
  filtro:any;

  addCurso(valor:string ) {
    const novoValorSemEspacos = valor.replace(/^\s+/, '');
    if (novoValorSemEspacos.match(/[a-zA-Z0-9]+/g)) {
    this.livros.push(novoValorSemEspacos)
    console.log(this.livros)
    }
  }

  obterCursos() {
    if( this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === "") {
      return this.livros;
    }
    let filter = this.filtro.toLocaleString().toLowerCase()
    return this.livros.filter((v:string) => v.toLowerCase().includes(filter))
  }

  valorAsync = new Promise((resolve, reject)=>{
    setTimeout(
      () => resolve('Valor assíncrono')
      , 2000
    )
  })

  valorAsync2 = new Observable<string>(observable => {
    setTimeout(() => {
      observable.next('Valor assíncrono 2');
    }, 2000);
  });
  constructor () {
  }
}
