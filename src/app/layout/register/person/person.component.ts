import { Component, OnInit } from '@angular/core';
import { Person } from '../../../models/registers/person';
import { PersonService } from '../../../services/register/person.service';
import { FormBaseComponent } from '../../../components/controls/form-base.component';
import { Translate } from '../../../locales/translate';
import { PersonComponentHtml } from '../../../locales/translations/person.component.html';
import { FormBuilder } from '@angular/forms';
import { StatusService } from '../../../services/enums/status-service.enum';

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

}
