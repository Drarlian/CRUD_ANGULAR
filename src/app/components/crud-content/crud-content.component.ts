import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-crud-content',
  templateUrl: './crud-content.component.html',
  styleUrls: ['./crud-content.component.scss'],
})
export class CrudContentComponent {
  nome: string = '';
  idade: string = '';
  cargo: string = '';
  sexo: string = '';

  constructor(private userService: UserService) {}

  cadastrar(){

    this.userService.adicionarPessoa(this.nome, this.idade, this.cargo, this.sexo)

    this.nome = '';
    this.idade = '';
    this.cargo = '';
    this.sexo = '';
  }
}
