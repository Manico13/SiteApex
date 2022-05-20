import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ApiService } from '../api/api.service';
import { Contato } from '../api/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public posts: Contato[] = [];
  contato = new Contato;

  constructor(private servico:ApiService) { }

  ngOnInit(): void {
    this.atualizaLista();
  }

  atualizaLista() {
    this.servico.listar().subscribe(posts=> {this.posts = posts});
  }

  handleSubmit() {
    this.servico.adicionar(this.contato)
    .subscribe(posts=> {this.posts.push(posts)});

    window.location.reload();
  }

  handleDelete(id : Number) {
    this.servico.remover(id)
    .subscribe(posts => {});
    window.location.reload();
  }
  
}
