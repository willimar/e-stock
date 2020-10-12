import { UserInfo } from './user-info';
import { Address } from './address';
import { Document } from './document';
import { PersonalContact } from './personal-contact';
import { PersonInfo } from './person-info';
import { BaseModel } from './../shared/base-model';

export class Person extends BaseModel {
  public personInfo: PersonInfo = new PersonInfo();
  public userInfo: UserInfo = new UserInfo();
  public personalContacts: PersonalContact[] = [];
  public addresses: Address[] = [];
  public documents: Document[] = [];
}
