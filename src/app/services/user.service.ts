import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'URL do end-point';

  /*
  * Objeto HttpOptions pode ser utilizado para fornecer parâmetros
  * ao cabeçalho "Header" do Protocolo HTTP. Esse parâmetro é opcioinal
  */
 httpOptions= {
  headers: new HttpHeaders({
    'Context-Type': 'application/json',
    'Token': 'Token Key'
  })
 }

  constructor(private httpClient: HttpClient) { }

  /*
  * Retorna a lista de Usuários da API
  */
 getUsers():Observable<User[]> {
  return this.httpClient.get<User[]>(this.apiUrl);
 }

 /*
  * Envia o objeto User para ser gravado no BD/API
  */
 postUser(user: User):Observable<User> {
  return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
 }

 /*
  * Excluir o Usuário do BD/API
  */
 deleteUser(id: number):Observable<User> {
  return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
 }

 /*
  * Editar o Usuário do BD/API
  */
 updateUser(id: string, user: User):Observable<User> {
  return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
 }

/*
  * Retorna o Usuário do BD/API especificado pelo ID
  */
getUser(id: string):Observable<User[]> {
  return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
 }

}
