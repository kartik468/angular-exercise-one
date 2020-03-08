import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId: string) {
    const httpParams = new HttpParams().set('id', userId);
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users', { params: httpParams });
  }
}
