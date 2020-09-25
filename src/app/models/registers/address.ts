import { City } from './city';
import { BaseModel } from './../shared/base-model';

export class Address extends BaseModel {
  public publicPlace: string;
  public streedName: string;
  public fullStreeName: string;
  public number: string;
  public complement: string;
  public postalCode: string;
  public district: string;
  public city: City;
}
