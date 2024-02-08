import { GlobalService } from './../../services/globalContext/global.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Pessoa } from 'src/interfaces/Pessoa';

@Component({
  selector: 'app-table-viewer',
  templateUrl: './table-viewer.component.html',
  styleUrls: ['./table-viewer.component.scss']
})
export class TableViewerComponent implements OnInit {
  pessoas!: any;

  statusDivAtualizar!: boolean;

  constructor(private userService: UserService, private globalService: GlobalService) {
    this.globalService.toggleStatus.subscribe((status) => this.statusDivAtualizar = status);
  }

  ngOnInit() {
    this.userService.pessoaVisivel.subscribe((pessoa) => this.pessoas = pessoa);
  }

  deletarUsuario(id: string){
    const certeza = window.confirm('Tem certeza que deseja excluir o usuário?');

    if (certeza){
      this.userService.deletePessoa(id)
  
      const newPessoas = this.pessoas.filter((pessoa: Pessoa) => pessoa.id != id)
      this.pessoas = newPessoas;
    }
  }

  exibirDivAtualizar(pessoa: Pessoa){
    this.globalService.alterarStatus()
    this.globalService.toggleStatus.subscribe((status) => this.statusDivAtualizar = status)

    this.globalService.alterarPessoaTemp({...pessoa})
  }
}
