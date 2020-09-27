import { Person } from './../../models/registers/person';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService<Person> {

  constructor(protected http: HttpClient, public entity: Person) {
    super();
  }

  login(user: any): Promise<any> {
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  createAccount(account: any): Promise<any> {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
}
