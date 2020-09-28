import { Guid } from './../../models/shared/guid';
import { Status } from './../../models/enums/status.enum';
import { BaseModel } from './../../models/shared/base-model';
import { Injectable } from '@angular/core';
import { SettingComponent } from '../../layout/shared/setting/setting.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleCode } from '../enums/handle-code.enum';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BaseService<TEntity> {

  public errorMessages: any[] = [];
  public messages: any[] = [];
  public formGroup: FormGroup[] = [];
  public entity: TEntity;
  protected controller: string;

  protected http: HttpClient;

  protected exceptionResolve(e: any): void {
    e.error.forEach(element => {
      const message = {
        boxTitle: `Message type ${element.messageType}`,
        boxText: `Code: ${element.code} with message: ${element.message}`,
        isError: false
      };

      this.errorMessages.push(message);
    });
  }

  protected responseResolve(value: any[]): void {
    const result: any[] = [];

    value.forEach(item => {
      const code: number = item.code;
      const message = {
        boxTitle: `Message type ${item.messageType}`,
        boxText: `Code: ${code} with message: ${item.message}`,
        isError: false
      };

      if ((code === HandleCode.Accepted) || (code === HandleCode.Ok)) {
        message.isError = false;
        this.messages.push(message);
      } else {
        message.isError = true;
        this.errorMessages.push(message);
      }
    });
  }

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

  public submit(value: TEntity): any {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(`${SettingComponent.crudApiUrl}/api/${this.controller}`,
        JSON.stringify(value),
        httpOptions);
  }

  public save(value: TEntity): void {
    this.errorMessages = [];
    this.messages = [];

    this.submit(value)
      .subscribe(
        (data: any[]) => this.responseResolve(data),
        (error: any) => this.exceptionResolve(error));
  }
}
