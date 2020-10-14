import { BaseService } from './../../services/shared/base.service';
import { IColumnDef } from './../interfaces/icolumn-def';
import { Status } from './../../models/enums/status.enum';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Input, Component } from '@angular/core';
import { StatusService } from '../../services/enums/status-service.enum';

declare var $: any;

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: []
})
export class FormBaseComponent<TEntity> {
  public static dateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  public static emailFormat = /^(([^<>()\[\]\.,;:\s@\']+(\.[^<>()\[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i;
  public static urlFormat = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  public static telephoneFormat = /^\+[1-9]{1}[0-9]{3,14}$/;
  public static brazilianPostalCode = /^[0-9]{5}(?:-[0-9]{4})?-[0-9]{3}$/;
  public static postalCodeFormat = /^([0-9]{5}-[0-9]{3})|([0-9]{5})|([0-9]{4}-[0-9]{4})|([a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{1}[0-9]{1})/;

  @Input() service: BaseService<TEntity> = null;
  @Input() height: number = window.innerHeight;

  public formGroupRules: FormGroup;
  public formBuilder: FormBuilder;
  private status = Status;

  public columnDef: IColumnDef[] =  [
  {
    headerName: 'Id',
    field: 'id',
    checkboxSelection: false,
    editable: false,
    width: 100,
    hide: true
  },
  {
    headerName: 'Name',
    field: 'name',
    checkboxSelection: true,
    editable: false,
    width: 250,
    hide: false
  },
  {
    headerName: 'Readonly',
    field: 'readOnly',
    checkboxSelection: false,
    editable: false,
    width: 100,
    hide: false
  }];

  getErrors(): any[] {
    const result: any[] = [];
    this.service.errorMessages.forEach(item => {
      result.push(item);
    });

    return result;
  }

  getMessages(): any[] {
    const result: any[] = [];
    this.service.messages.forEach(item => {
      result.push(item);
    });

    return result;
  }

  public submit(form: any) {
    this.service.save(this.service.entity);
  }

  isValid(): boolean {

    if (this.service.status === StatusService.saving) {
      return false;
    }

    let result = true;

    if (this.service.formGroup === undefined) {
      return true;
    }

    //result = result && this.service.formGroup.valid;
    this.service.formGroup.forEach(element => {
      result = result && element.valid;
    });

    return result;
  }

  formVisible(): boolean {
    return this.service.status === StatusService.edit || this.service.status === StatusService.insert;
  }
}
