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

    const novaPessoa = JSON.parse(JSON.stringify(pessoa));

    const novasPessoas = [...pessoasAtuais, novaPessoa];

    // ------------------------------------------------

    this.pessoas.next(novasPessoas);

    this.pessoas.subscribe(val => {
      console.log(val);
    });
  }
}
