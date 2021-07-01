import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../../models/registers/person';
import { PersonService } from '../../../services/register/person.service';
import { FormBaseComponent } from '../../../components/controls/form-base.component';
import { SettingComponent } from '../../shared/setting/setting.component';
import { Translate } from '../../../locales/translate';
import { UserComponentHtml } from '../../../locales/translations/layout/register/user.component.html';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})
export class UserComponent extends FormBaseComponent<Person> implements OnInit {

  translate: Translate = new Translate(new UserComponentHtml());

  constructor(formBuilder: FormBuilder, public service: PersonService) {
    super();

    this.formBuilder = formBuilder;
    this.service.domain = SettingComponent.authApiUrl;
    this.service.controller = "Account/Append"
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({

    }, {});
  }


}
