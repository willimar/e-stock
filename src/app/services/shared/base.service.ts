import { Guid } from './../../models/shared/guid';
import { Status } from './../../models/enums/status.enum';
import { BaseModel } from './../../models/shared/base-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public errorMessages: any[] = [];

  protected getCollectionIndex(collection: BaseModel[], id: Guid): number {
      let idx = -1;
      let result = -1;

      collection.forEach(item => {
          idx++;
          if(item.id === id) {
              result = idx;
          }
      });

      return result;
  }

  protected generateDefaultValues(value: BaseModel): void {
      value.lastChageDate = new Date();

      if (!value.id) {
          value.id = Guid.newGuid();
      }

      if(!value.registerDate) {
            value.registerDate = new Date();
      }

      if(!value.status) {
          value.status = Status.active;
      }
  }

  public getList(collection: BaseModel[], status: Status): BaseModel[] {
      const result: BaseModel[] = [];

      if (collection === undefined) {
        return result;
      }

      collection.forEach(item => {
          if (item.status === status) {
              result.push(item);
          }
      });

      return result;
  }
}
