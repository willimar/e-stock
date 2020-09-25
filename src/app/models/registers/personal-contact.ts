import { BaseModel } from './../shared/base-model';
import { ContactType } from './../enums/contact-type.enum';

export class PersonalContact extends BaseModel {
  public contactType: ContactType;
  public value: string;
}
