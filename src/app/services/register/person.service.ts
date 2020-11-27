import { Statement } from './../enums/statement.enum';
import { OperationType } from './../enums/operation-type.enum';
import { GraphClientService } from './../shared/graph-client.service';
import { Guid } from './../../models/shared/guid';
import { SettingComponent } from './../../layout/shared/setting/setting.component';
import { Address } from './../../models/registers/address';
import { Status } from './../../models/enums/status.enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './../shared/base.service';
import { Injectable } from '@angular/core';
import { Person } from '../../models/registers/person';
import { PersonalContact } from '../../models/registers/personal-contact';
import { PersonInfo } from '../../models/registers/person-info';
import { UserInfo } from '../../models/registers/user-info';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseService<Person> {

  constructor(protected http: HttpClient, public entity: Person) {
      super();
      this.entity.id = new Guid(Guid.empty);
      this.entity.personInfo.id = new Guid(Guid.empty);
      this.entity.userInfo.id = new Guid(Guid.empty);
      this.controller = 'Person/Save';
      this.domain = SettingComponent.estockApiUrl;
  }

  addAddressItem(address: Address): void {
    this.generateDefaultValues(address);
    this.entity.addresses.push(address);
  }

  removeAddressItem(address: Address): void {
      const idx: number = this.getCollectionIndex(this.entity.addresses, address.id);

      if (idx >= 0) {
          this.entity.addresses[idx].status = Status.deleted;
      } else {
          console.log('Address not found.');
      }
  }

  public loadentity(id: Guid): void {
    const graphClient = new GraphClientService(this.http);
    const body = graphClient.appendBody('person');

    body.queryInfo.limit = 1;
    body.queryInfo.page = 0;
    body.queryInfo.validateTocken = SettingComponent.authToken;
    body.queryInfo.systemName = SettingComponent.systemName;

    body.resultFields.push('name');
    body.resultFields.push('nickName');
    body.resultFields.push('profession');
    body.resultFields.push('birthday');
    body.resultFields.push('id');
    body.resultFields.push('birthCity {id, uf }');
    body.resultFields.push('gender');
    body.resultFields.push('maritalStatus');
    body.resultFields.push('specialNeeds');
    body.resultFields.push('lastChangeDate');
    body.resultFields.push('registerDate');
    body.resultFields.push('contacts { id, type, value }');
    body.resultFields.push('status');

    body.appendArgument('id').appendCheck(OperationType.EqualTo, Statement.And, id.toString());

    graphClient.resolve(`${SettingComponent.estockViewUrl}/graphql`);

    graphClient.result.subscribe((content: { data: { person: any[]; }; }) => {
      const entityResult = content.data.person[0];

      this.mapper(entityResult);
    });
  }

  mapper(entityResult: any): void {
    this.entity.id = entityResult.id;
    this.entity.lastChageDate = entityResult.lastChangeDate;
    this.entity.personInfo = this.getPersonInfo(entityResult);
    this.entity.personalContacts = this.getContacts(entityResult.contacts);
    this.entity.status = this.getStatus(entityResult.status);
    //this.entity.userInfo = this.getUserInfo(entityResult.userInfo);
  }

  getContacts(contacts: any): PersonalContact[] {
    return [];
  }

  getStatus(status: any): Status {
    switch(status) {
      case 'ACTIVE': {
        return Status.active;
        break;
      }
      case 'BLOCKED': {
        return Status.blocked;
        break;
      }
      case 'DELETED': {
        return Status.deleted;
        break;
      }
      default: {
        return Status.active;
        break;
      }
    }
  }

  getPersonInfo(entityResult: any): PersonInfo {
    const personInfo = new PersonInfo();
    const date = formatDate(entityResult.birthday, 'yyyy/mm/dd', 'en');

    personInfo.birthCity = entityResult.birthCity.id;
    personInfo.birthDay = new Date(entityResult.birthday);
    personInfo.birthState = entityResult.birthCity.uf;
    personInfo.gender = entityResult.gender;
    personInfo.maritalStatus = entityResult.maritalStatus;
    personInfo.name = entityResult.name;
    personInfo.nickName = entityResult.nickName;
    personInfo.profession = entityResult.profession;
    personInfo.registerDate = entityResult.registerDate;

    return personInfo;
  }

  getUserInfo(userInfoResult: any): UserInfo {
    const userInfo = new UserInfo();

    return userInfo
  }

}
