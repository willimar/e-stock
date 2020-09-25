import { Guid } from './guid';
import { Status } from './../enums/status.enum';

export class BaseModel {
  public id: Guid;
  public registerDate: Date;
  public lastChageDate: Date;
  public status: Status;
}
