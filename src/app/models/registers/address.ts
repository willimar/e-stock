import { City } from './city';
import { BaseModel } from './../shared/base-model';

export class Address extends BaseModel {
  public fullStreetName: string;
  public number: string;
  public complement: string;
  public postalCode: string;
  public district: string;
  public city: City;
}
