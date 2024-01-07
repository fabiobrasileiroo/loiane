import { Component } from '@angular/core';

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
}
