import { Router } from '@angular/router';
import { AccountService } from './../../services/shared/account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../models/registers/person';
import { FormBaseComponent } from '../../components/controls/form-base.component';
import { SettingComponent } from '../shared/setting/setting.component';
import { ReturnCode } from '../../services/enums/return-code.enum';
import { Translate } from '../../locales/translate';
import { LoginComponentHtml } from '../../locales/translations/layout/login.component.html';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent extends FormBaseComponent<Person> implements OnInit {

  login = {
    user: '',
    password: ''
  };

  translate: Translate = new Translate(new LoginComponentHtml());

  constructor(public service: AccountService, private router: Router,
    public formBuilder: FormBuilder) {
    super();
    SettingComponent.authToken = '';
    SettingComponent.logged = false;
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({
      userName: this.formBuilder.control('', [Validators.required]),
      userPassword: this.formBuilder.control('', [Validators.required])
    }, {validator: null});
  }

  resolveLogin(value: any[]) {
    this.service.errorMessages = [];

    let result = false;

    value.forEach(item => {
      const code: number = item.code;

      if (code === ReturnCode.notFound) {
        const message = {
          boxTitle: `Invalid login`,
          boxText: `Login or password not found.`,
          isError: false
        };

        this.service.errorMessages.push(message);
      } else if (code === ReturnCode.accepted) {
        SettingComponent.authToken = item.message;
        SettingComponent.logged = true;

        window.localStorage.setItem("authToken", btoa(SettingComponent.authToken));

        this.router.navigate(['']);
      }
    });
  }

  onSubmit(sender: any): void {
    try {
      this.login.user = this.formGroupRules.controls.userName.value;
      this.login.password = this.formGroupRules.controls.userPassword.value;

      if (this.login.user.length === 0 && this.login.password.length === 0) {
        this.service.errorMessages = [];
        const message = {
          boxTitle: `Invalid login`,
          boxText: `Input your login and password.`,
          isError: false
        };

        this.service.errorMessages.push(message);
        this.openError();
        return;
      }

      this.service.domain = SettingComponent.authApiUrl;
      this.service.controller = 'Account/Login';

      const result = this.service.submit(this.login).subscribe(
        (data: any[]) => {
          this.resolveLogin(data);
          if (SettingComponent.logged === false)
          {
            this.openError();
          }
        },
        (error: any) => {
          this.service.exceptionResolve(error);
          this.openError();
        });

    } catch (error) {
      console.error(error);
    }
  }

  openError() {
    $('#login-error').modal('show');
  }

}
