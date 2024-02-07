import { Injectable, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';  // Importando a biblioteca de Cookies
import { BehaviorSubject } from 'rxjs';
import { Pessoa } from 'src/interfaces/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private pessoas = new BehaviorSubject<Pessoa[]>([]);
  pessoaVisivel = this.pessoas.asObservable();

  constructor(private cookieService: CookieService) {  // Injetando o Cookie.
    // O código aqui dentro só vai ser executado na primeira vez que o serviço for instânciado na aplicação.
    const pessoasTemp = this.getPessoas()

    if (pessoasTemp != null){
      this.pessoas.next(pessoasTemp)
    }
  }

  adicionarPessoa(nome: string, idade: string, cargo: string, sexo: string){
    let novoId;

    if (this.pessoas.value.length > 0){
      novoId = this.pessoas.value.length + 1
    } else {
      novoId = 1
    }

    const objetoPessoa: Pessoa = {
      id: String(novoId),
      nome,
      idade,
      cargo,
      sexo
    }

    const pessoasAtuais = this.pessoas.value;

    // ENTENDER AQUI EMBAIXO: SHALLOW COPY E DEEPY COPY
    // RESPOSTA: A variavel "pessoa" estava causando esse problema, pois o ao alterar ela em qualquer momento, todo lugar onde ela foi usada
    // também era alterado, fazendo assim a lista sempre ter todas as pessoas cadastradas como a última cadastrada.

    // const novaPessoa = JSON.parse(JSON.stringify(pessoa));

    const novasPessoas = [...pessoasAtuais, {...objetoPessoa}];

    // ------------------------------------------------

    this.pessoas.next(novasPessoas);

		// Guardando um valor nos Cookies.
    this.cookieService.set('usuarios', `${JSON.stringify(this.pessoas.value)}`, 7)

    this.pessoas.subscribe(val => {
      console.log(val);
    });
  }

  getPessoas(): Pessoa[] | null{
    try{
			// Pegando um valor armazenado nos Cookies.
      return JSON.parse(this.cookieService.get('usuarios'))
    } catch{
      return null
    }
  }

  deletePessoa(id: string){
    const newPessoas = this.pessoas.value.filter((pessoa) => pessoa.id != id)
    this.pessoas.next(newPessoas)
    this.cookieService.set('usuarios', JSON.stringify(newPessoas), 7)
  }

  atualizarPessoas(newPessoa: Pessoa){
    
    let pessoasTemp = [...this.pessoas.value];
    // console.log(pessoasTemp)

    pessoasTemp.forEach((pessoa, index) => {
      if (pessoa.id == newPessoa.id){
        pessoasTemp[index] = newPessoa
      }
    })

    this.pessoas.next([...pessoasTemp])
    this.cookieService.set('usuarios', JSON.stringify(this.pessoas.value), 7)
  }
}