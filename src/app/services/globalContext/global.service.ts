import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pessoa } from 'src/interfaces/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private status = new BehaviorSubject(false);
  toggleStatus = this.status.asObservable();

  private pessoa = new BehaviorSubject({});
  pessoaTemp = this.pessoa.asObservable();

  constructor() {}

  alterarStatus(){
    this.status.next(!this.status.value)
  }

  alterarPessoaTemp(pessoa: Pessoa | {}){
    this.pessoa.next(pessoa);
    console.log(this.pessoa.value)
  }
}
