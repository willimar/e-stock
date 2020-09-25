import { Address } from './address';
import { Document } from './document';
import { PersonalContact } from './personal-contact';
import { PersonInfo } from './person-info';
import { BaseModel } from './../shared/base-model';

export class Person extends BaseModel {
  public personInfo: PersonInfo = new PersonInfo();
  public personalContacts: PersonalContact[] = [];
  public dependents: Person[] = [];
  public addresses: Address[] = [];
  public documents: Document[] = [];
}
