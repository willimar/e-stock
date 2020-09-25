import { BaseModel } from './../shared/base-model';

export class City extends BaseModel {
  public name: string;
  public initials: string;
  public code: string;
  public state: string;
}
