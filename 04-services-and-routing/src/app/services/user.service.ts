import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user.model';

/***
 * TODO: Implementar el servicio de usuarios.
 * https://reqres.in/
 */
@Injectable({
  providedIn: 'root', // El root nos ayuda a inyectar el servicio y usarlo en cualquier parte
})
export class UserService {
  private baseUrl: string = 'https://reqres.in';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get(this.baseUrl + '/api/users').pipe(
      map((resp: any) => {
        return resp.data;
      })
    );
  }

  //   getUser(): Observable<any> {}

  //   deleteUser(): Observable<any> {}
}
