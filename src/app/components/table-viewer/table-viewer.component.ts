import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';
import { Pessoa } from 'src/interfaces/Pessoa';

@Component({
  selector: 'app-table-viewer',
  templateUrl: './table-viewer.component.html',
  styleUrls: ['./table-viewer.component.scss']
})
export class TableViewerComponent implements OnInit {
  pessoas!: any;

  constructor(private userService: UserService, private cookieService: CookieService) {}

  ngOnInit() {
    this.pessoas = this.userService.getPessoas();

    if (this.pessoas == null){
      this.userService.pessoaVisivel.subscribe((pessoas) => this.pessoas = pessoas);
    }
  }
}
