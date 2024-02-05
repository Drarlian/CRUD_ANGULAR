import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Pessoa } from 'src/interfaces/Pessoa';

@Component({
  selector: 'app-table-viewer',
  templateUrl: './table-viewer.component.html',
  styleUrls: ['./table-viewer.component.scss']
})
export class TableViewerComponent implements OnInit {
  pessoas!: Pessoa[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log('ViewContentComponent initialized');
    console.log(this.userService.pessoaVisivel)
    this.userService.pessoaVisivel.subscribe((pessoas) => {
      console.log(pessoas)
      this.pessoas = pessoas;
    });
  }

  exibir(){
    console.log(this.pessoas)
  }
}
