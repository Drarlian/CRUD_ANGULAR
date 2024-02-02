import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pessoa } from 'src/interfaces/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private pessoas = new BehaviorSubject<Pessoa[]>([]);
  pessoaVisivel = this.pessoas.asObservable();

  constructor() { }

  adicionarPessoa(pessoa: Pessoa){
    const pessoasAtuais = this.pessoas.value;

    // ENTENDER AQUI EMBAIXO: SHALLOW COPY E DEEPY COPY
    // RESPOSTA: A variavel "pessoa" estava causando esse problema, pois o ao alterar ela em qualquer momento, todo lugar onde ela foi usada
    // também era alterado, fazendo assim a lista sempre ter todas as pessoas cadastradas como a última cadastrada.

    // const novaPessoa = JSON.parse(JSON.stringify(pessoa));

    const novasPessoas = [...pessoasAtuais, {...pessoa}];

    // ------------------------------------------------

    this.pessoas.next(novasPessoas);

    this.pessoas.subscribe(val => {
      console.log(val);
    });
  }
}
