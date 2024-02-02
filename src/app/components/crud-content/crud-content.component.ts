import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Pessoa } from 'src/interfaces/Pessoa';

@Component({
  selector: 'app-crud-content',
  templateUrl: './crud-content.component.html',
  styleUrls: ['./crud-content.component.scss']
})
export class CrudContentComponent {
  pessoa: Pessoa = {
    nome: '',
    idade: '',
    cargo: '',
    sexo: '',
  };

  constructor(private userService: UserService) {}

  cadastrar(){
    this.userService.adicionarPessoa(this.pessoa)
  }
}
