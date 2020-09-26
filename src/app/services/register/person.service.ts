import { Statement } from './../enums/statement.enum';
import { OperationType } from './../enums/operation-type.enum';
import { GraphClientService } from './../shared/graph-client.service';
import { Guid } from './../../models/shared/guid';
import { SettingComponent } from './../../layout/shared/setting/setting.component';
import { PersonInfo } from './../../models/registers/person-info';
import { HandleCode } from './../enums/handle-code.enum';
import { Address } from './../../models/registers/address';
import { Status } from './../../models/enums/status.enum';
import { PersonalContact } from './../../models/registers/personal-contact';
import { Person } from './../../models/registers/person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BaseService } from './../shared/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseService {

  public messages: any[] = [];
  public personInfoForm: FormGroup;

  constructor(private http: HttpClient, public person: Person) {
      super();
  }

  addContactItem(contact: PersonalContact): void {
      this.generateDefaultValues(contact);
      this.person.personalContacts.push(contact);
  }

  removeContactItem(contact: PersonalContact): void {
      const idx: number = this.getCollectionIndex(this.person.personalContacts, contact.id);

      if (idx >= 0) {
          this.person.personalContacts[idx].status = Status.deleted;
      } else {
          console.log('Contact not found.');
      }
  }

  addAddressItem(address: Address): void {
    console.log(address);
    this.generateDefaultValues(address);
    console.log(address);
    this.person.addresses.push(address);
  }

  removeAddressItem(address: Address): void {
      const idx: number = this.getCollectionIndex(this.person.addresses, address.id);

      if (idx >= 0) {
          this.person.addresses[idx].status = Status.deleted;
      } else {
          console.log('Address not found.');
      }
  }

  saverPerson(person: Person): void {
    person.personInfo.id = person.id;

    this.errorMessages = [];
    this.messages = [];

    this.submitPerson(person.personInfo)
      .subscribe(
        data => this.responseResolve(data),
        error => this.exceptionResolve(error));
  }

  private responseResolve(value: any[]): void {
    const result: any[] = [];

    value.forEach(item => {
      const code: number = item.code;
      const message = {
        boxTitle: `Message type ${item.messageTipe}`,
        boxText: `Code: ${code} with message: ${item.message}`,
        isError: false
      };

      if ((code === HandleCode.Accepted) || (code === HandleCode.Ok)) {
        message.isError = false;
        this.messages.push(message);
      } else {
        message.isError = true;
        this.errorMessages.push(message);
      }
    });
  }

  submitPerson(personInfo: PersonInfo): any {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(`${SettingComponent.crudApiUrl}/api/Person/Person`,
        JSON.stringify(personInfo),
        httpOptions);
  }

  private exceptionResolve(e: any): void {
    const message = {
      boxTitle: `Message type ${e.name}`,
      boxText: `Code: ${e.status} with message: ${e.message}`,
      isError: false
    };

    this.errorMessages.push(message);
  }

  public loadPerson(id: Guid): any {
    const graphClient = new GraphClientService(this.http);
    const body = graphClient.appendBody('person');

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
      const personResult = content.data.person[0];
      this.personInfoForm.controls.name = personResult.name;
    });

    return graphClient.result;
  }

}
