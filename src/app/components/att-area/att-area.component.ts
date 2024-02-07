import { Component, Input } from '@angular/core';
import { GlobalService } from 'src/app/services/globalContext/global.service';
import { UserService } from 'src/app/services/user.service';
import { Pessoa } from 'src/interfaces/Pessoa';

@Component({
  selector: 'app-att-area',
  templateUrl: './att-area.component.html',
  styleUrls: ['./att-area.component.scss']
})
export class AttAreaComponent {
  statusDivAtualizar!: boolean;

  pessoaAtt!: any; 

  constructor(private globalService: GlobalService, private userService: UserService){
    this.globalService.pessoaTemp.subscribe((pessoa) => this.pessoaAtt = pessoa)
  }

  fecharAba(){
    this.globalService.alterarStatus()
    this.globalService.toggleStatus.subscribe((status) => this.statusDivAtualizar = status)
  }

  atualizar(){
    console.log(this.pessoaAtt)
    this.userService.atualizarPessoas({...this.pessoaAtt})
  }
}
