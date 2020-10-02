import { Person } from './../../models/registers/person';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingComponent } from '../../layout/shared/setting/setting.component';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService<Person> {

  constructor(protected http: HttpClient, public entity: Person) {
    super();
    this.domain = SettingComponent.authApiUrl;
  }
}
