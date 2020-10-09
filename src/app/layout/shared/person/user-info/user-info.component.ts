import { UserInfo } from './../../../../models/registers/user-info';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { PersonService } from './../../../../services/register/person.service';
import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../../../models/registers/person';
import { FormBaseComponent } from '../../../../components/controls/form-base.component';
import { EMPTY } from 'rxjs';
import { Translate } from '../../../../locales/translate';
import { UserInfoComponentHtml } from '../../../../locales/translations/user-info.component.html';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: []
})
export class UserInfoComponent extends FormBaseComponent<Person> implements OnInit {

  @Input() personService: PersonService;

  translate = new Translate(new UserInfoComponentHtml());

  static equalTo(): {[key: string]: boolean} {
    return undefined;
  }

  constructor(public formBuilder: FormBuilder, private http: HttpClient) {
    super();
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({
      userName: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
      userEmail: this.formBuilder.control('', [Validators.required, Validators.pattern(FormBaseComponent.emailFormat)]),
      userPassword: this.formBuilder.control('', [Validators.required, Validators.minLength(8), Validators.pattern(/[A-Z]/), Validators.pattern(/[0-9]/), Validators.pattern(/[a-z]/)]),
      userPasswordAux: this.formBuilder.control('', [Validators.required, Validators.minLength(8), UserInfoComponent.passwordCheck])
    }, {validator: UserInfoComponent.equalTo()});
    this.service.formGroup.push(this.formGroupRules);
  }

  savePerson(form: UserInfo): void {
    this.service.entity.userInfo.userName = form.userName;
    this.service.entity.userInfo.userEmail = form.userEmail;
    this.service.entity.userInfo.userPassword = form.userPassword;
  }

  static passwordCheck(fc: FormControl) {
    const password = fc.parent ? fc.parent.controls['userPassword'].value : EMPTY;
    const passwordAux = fc.value;

    if (password === passwordAux) {
      return (null);
    } else {
      return ({passwordCheck: true});
    }
  }

}
