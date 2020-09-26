import { BaseModel } from './../shared/base-model';

export class PersonInfo extends BaseModel {
  public name: string;
  public nickName: string;
  public birthDay: Date;
  public birthCity = '';
  public birthState = '';
  public gender: string;
  public maritalStatus: string;
  public specialNeeds = false;
  public profession: string;

  public getLastName(): string {
    const names = this.name.split(' ');
    return names[names.length - 1];
  }

  public getFirstName(): string {
    const names = this.name.split(' ');
    return names[0];
  }
}
