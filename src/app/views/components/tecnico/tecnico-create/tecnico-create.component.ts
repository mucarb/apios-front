import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico: Tecnico = {
    id: '',
    nome: 'Murilo',
    cpf: '060.715.960-09',
    telefone: '(00) 00000-0000'
  }

  constructor(
    private router: Router,
    private service: TecnicoService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['tecnicos'])
  }

  create(): void {
    this.service.create(this.tecnico).subscribe((resposta) => {
      this.router.navigate(['tecnicos']);
      this.service.message('Cadastro de Técnico concluído!');
    }, err => {
      if (err.error.error.match('já cadastrado')) {
        this.service.message(err.error.error);
      }
    });
  }

}
