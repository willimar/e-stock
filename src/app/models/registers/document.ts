import { BaseModel } from './../shared/base-model';

export class Document extends BaseModel {
  public name: string;
  public value: string;
  public emissionDate: Date;
  public complement: string;
}
