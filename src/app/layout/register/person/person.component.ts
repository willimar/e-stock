import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/registers/person';
import { PersonService } from '../../../services/register/person.service';
import { FormBaseComponent } from '../../../components/controls/form-base.component';
import { Translate } from '../../../locales/translate';
import { PersonComponentHtml } from '../../../locales/translations/person.component.html';
import { FormBuilder } from '@angular/forms';
import { StatusService } from '../../../services/enums/status-service.enum';
import { Guid } from '../../../models/shared/guid';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: []
})
export class PersonComponent extends FormBaseComponent<Person> implements OnInit {

  translate: Translate = new Translate(new PersonComponentHtml());

  constructor(formBuilder: FormBuilder, public service: PersonService) {
    super();
   }

  ngOnInit(): void {

  }

  onInsert(value: any): void{
    this.service.entity = new Person();
    this.service.entity.id = Guid.newGuid();
    this.service.entity.personInfo.id = Guid.newGuid();
    this.service.entity.userInfo.id = Guid.newGuid();
  }

}
