import { BaseModel } from './../shared/base-model';

export class UserInfo extends BaseModel {
  public userName: string;
  public userPassword: string;
  public userEmail: string;
}
