import { IColumnDef } from './../interfaces/icolumn-def';
import { Status } from './../../models/enums/status.enum';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Output, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormBase {
  public static dateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  public static emailFormat = /^(([^<>()\[\]\.,;:\s@\']+(\.[^<>()\[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i;
  public static urlFormat = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  public static telephoneFormat = /^\+[1-9]{1}[0-9]{3,14}$/;
  public static brazilianPostalCode = /^[0-9]{5}(?:-[0-9]{4})?-[0-9]{3}$/;
  public static postalCodeFormat = /^([0-9]{5}-[0-9]{3})|([0-9]{5})|([0-9]{4}-[0-9]{4})|([a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{1}[0-9]{1})/;

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

  public formGroupRules: FormGroup;
  public formBuilder: FormBuilder;
  private status = Status;
}
