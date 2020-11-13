import { Guid } from './../../models/shared/guid';
import { Status } from './../../models/enums/status.enum';
import { BaseModel } from './../../models/shared/base-model';
import { Injectable } from '@angular/core';
import { SettingComponent } from '../../layout/shared/setting/setting.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleCode } from '../enums/handle-code.enum';
import { FormGroup } from '@angular/forms';
import { StatusService } from '../enums/status-service.enum';
import { IService } from '../interfaces/iservice-interface';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class BaseService<TEntity> implements IService {

  public errorMessages: any[] = [];
  public messages: any[] = [];
  public formGroup: FormGroup[] = [];
  public entity: TEntity;
  public controller: string;
  public domain: string;
  public status: StatusService = StatusService.reading;

  protected http: HttpClient;

  public exceptionResolve(e: any): void {
    if (e.error) {
      if (typeof(e.error) === 'string') {
        const message = {
          boxTitle: `Message type ${e.name}`,
          boxText: `Code: ${e.status} with message: ${e.message}`,
          isError: false
        };

        this.errorMessages.push(message);
      } else {
        e.error.forEach(element => {
          const message = {
            boxTitle: `Message type ${element.messageType}`,
            boxText: `Code: ${element.code} with message: ${element.message}`,
            isError: false
          };

          this.errorMessages.push(message);
        });
      }

    } else {
      const message = {
        boxTitle: `Message type ${e.name}`,
        boxText: `Code: ${e.status} with message: ${e.message}`,
        isError: false
      };

      this.errorMessages.push(message);
    }

    this.openError();

    this.status = StatusService.error;
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

    if (this.errorMessages.length > 0) {
      this.openError();
    } else if (this.messages.length > 0) {
      this.openInfo();
    }

    this.status = StatusService.reading;
  }

  public openError(): void {
    $('#modal-error').modal('show');
  }

  public openInfo(): void {
    $('#modal-info').modal('show');
  }

  public getCollectionIndex(collection: BaseModel[], id: Guid): number {
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

  public generateDefaultValues(value: BaseModel): void {
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

  public submit(value: any): any {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${SettingComponent.authToken}`,
        'SystemSource': `e-stock`
      }),
    };

    return this.http.post(`${this.domain}/api/${this.controller}`,
        JSON.stringify(value),
        httpOptions);
  }

  public save(value: TEntity): void {
    this.status = StatusService.saving;
    this.errorMessages = [];
    this.messages = [];

    this.submit(value)
      .subscribe(
        (data: any[]) => this.responseResolve(data),
        (error: any) => this.exceptionResolve(error));
  }

  public setStatus(value: StatusService): void {
    this.status = value;
  }
}
