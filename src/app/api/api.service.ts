import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url : string = "https://localhost:3036";
  // vetor : Postagem[] = [];

  constructor(private http: HttpClient ) { };

  listar() : Observable<Contato[]> {
    return this.http.get<Contato[]>(this.url);
  };
  
  remover(id : Number) : Observable<Contato> {
    return this.http.get<Contato>(this.url + "/deletar" + id);
  }



  adicionar(post: Contato) : Observable<Contato> {
    return this.http.post<Contato>(this.url + "/add", post);
  };

//   alterar(post: Postagem) : Observable<Postagem> {
//     return this.http.put<Postagem>(this.url + "/" + post.id, post);
//   };
}
