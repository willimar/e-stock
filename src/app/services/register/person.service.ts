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

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseService<Person> {

  constructor(protected http: HttpClient, public entity: Person) {
      super();
      this.entity.id = Guid.newGuid();
      this.entity.personInfo.id = Guid.newGuid();
      this.entity.userInfo.id = Guid.newGuid();
  }

  addContactItem(contact: PersonalContact): void {
      this.generateDefaultValues(contact);
      this.entity.personalContacts.push(contact);
  }

  removeContactItem(contact: PersonalContact): void {
      const idx: number = this.getCollectionIndex(this.entity.personalContacts, contact.id);

      if (idx >= 0) {
          this.entity.personalContacts[idx].status = Status.deleted;
      } else {
          console.log('Contact not found.');
      }
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

  public loadentity(id: Guid): any {
    const graphClient = new GraphClientService(this.http);
    const body = graphClient.appendBody('entity');

    body.resultFields.push('name');
    body.resultFields.push('nickName');
    body.resultFields.push('profession');
    body.resultFields.push('birthday');
    body.resultFields.push('id');
    body.resultFields.push('birthCity {id, uf }');
    body.resultFields.push('gender');
    body.resultFields.push('maritalStatus');
    body.resultFields.push('specialNeeds');

    body.appendArgument('id').appendCheck(OperationType.EqualTo, Statement.And, id.toString());

    graphClient.resolve(`${SettingComponent.crudApiUrl}/graphql`);

    graphClient.result.subscribe(content => {
      const entityResult = content.data.entity[0];
      this.formGroup.controls.name = entityResult.name;
    });

    return graphClient.result;
  }

}
