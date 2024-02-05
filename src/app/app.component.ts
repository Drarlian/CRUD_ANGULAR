import { Component } from '@angular/core';
import { Pessoa } from 'src/interfaces/Pessoa';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // teste!: Pessoa[];

  // constructor(private userService: UserService) {}

  // ngOnInit() {
  //   console.log('ViewContentComponent initialized');
  //   console.log('userService.pessoaVisivel:', this.userService.pessoaVisivel);

  //   this.userService.pessoaVisivel.subscribe((pessoas) => {
  //     console.log('pessoas:', pessoas);
  //     this.teste = pessoas;
  //   });
  // }
}
