import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/registers/person';
import { PersonService } from '../../../services/register/person.service';
import { FormBaseComponent } from '../../../components/controls/form-base.component';
import { Translate } from '../../../locales/translate';
import { PersonComponentHtml } from '../../../locales/translations/person.component.html';
import { FormBuilder } from '@angular/forms';
import { Guid } from '../../../models/shared/guid';
import { SettingComponent } from '../../shared/setting/setting.component';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: []
})
export class PersonComponent extends FormBaseComponent<Person> implements OnInit {

  translate: Translate = new Translate(new PersonComponentHtml());
  viewUrl: string = `${SettingComponent.estockViewUrl}/graphql`

  columnDef = [
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
      checkboxSelection: false,
      editable: false,
      width: 200,
      hide: false
     },
     {
      headerName: 'Nick',
      field: 'nickName',
      checkboxSelection: false,
      editable: false,
      width: 100,
      hide: false
     },
     {
      headerName: 'Special needs',
      field: 'specialNeeds',
      checkboxSelection: true,
      editable: false,
      width: 120,
      hide: false
     },
     {
      headerName: 'Profession',
      field: 'profession',
      checkboxSelection: false,
      editable: false,
      width: 250,
      hide: false
     },
     {
      headerName: 'Register',
      field: 'registerDate',
      checkboxSelection: false,
      editable: false,
      width: 200,
      hide: false,
      valueFormatter: this.currencyFormatter,
     },
     {
      headerName: 'Changed',
      field: 'lastChangeDate',
      checkboxSelection: false,
      editable: false,
      width: 200,
      hide: false,
      valueFormatter: this.currencyFormatter
     },
     {
      headerName: 'Status',
      field: 'status',
      checkboxSelection: false,
      editable: false,
      width: 100,
      hide: false
     }
   ];

  currencyFormatter(params: any): string {
    return formatDate(params.value, 'dd/MM/yyyy', 'en');
  }

  constructor(formBuilder: FormBuilder, public service: PersonService) {
    super();
    this.viewName = "person";
   }

  ngOnInit(): void {

  }

  onInsert(value: any): void{
    this.service.entity = new Person();
    this.service.entity.id = Guid.newGuid();
    this.service.entity.personInfo.id = Guid.newGuid();
    this.service.entity.userInfo.id = Guid.newGuid();
  }

  onSearch(value: any): void {

  }

  onSelectionChanged(value: any) {
    const id = value.api.getSelectedRows()[0].id;
    this.service.loadentity(id);
  }

}
