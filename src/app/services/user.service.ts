import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'URL do end-point';

  constructor(private httpClient: HttpClient) { }

  /*
  * Retorna a lista de Usuários da API
  */
 getUsers():Observable<User[]> {
  return this.httpClient.get<User[]>(this.apiUrl);
 }
}
