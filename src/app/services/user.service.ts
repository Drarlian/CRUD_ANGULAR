import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { Pessoa } from 'src/interfaces/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private pessoas = new BehaviorSubject<Pessoa[]>([]);
  pessoaVisivel = this.pessoas.asObservable();

  constructor(private cookieService: CookieService) {
    // O código aqui dentro só vai ser executado na primeira vez que o serviço for instânciado na aplicação.
    const pessoasTemp = this.getPessoas()

    if (pessoasTemp != null){
      this.pessoas.next(pessoasTemp)
    }
  }

  adicionarPessoa(pessoa: Pessoa){
    const pessoasAtuais = this.pessoas.value;

    // ENTENDER AQUI EMBAIXO: SHALLOW COPY E DEEPY COPY
    // RESPOSTA: A variavel "pessoa" estava causando esse problema, pois o ao alterar ela em qualquer momento, todo lugar onde ela foi usada
    // também era alterado, fazendo assim a lista sempre ter todas as pessoas cadastradas como a última cadastrada.

    // const novaPessoa = JSON.parse(JSON.stringify(pessoa));

    const novasPessoas = [...pessoasAtuais, {...pessoa}];

    // ------------------------------------------------

    this.pessoas.next(novasPessoas);

    this.cookieService.set('usuarios', `${JSON.stringify(this.pessoas.value)}`)

    // this.pessoas.subscribe(val => {
    //   console.log(val);
    // });
  }

  getPessoas(): Pessoa[] | null{
    try{
      return JSON.parse(this.cookieService.get('usuarios'))
    } catch{
      return null
    }
  }
}