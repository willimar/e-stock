import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/registers/person';
import { AccountService } from './../../services/shared/account.service';
import { FormBaseComponent } from '../../components/controls/form-base.component';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SettingComponent } from '../shared/setting/setting.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: []
})
export class ForgotPasswordComponent extends FormBaseComponent<Person> implements OnInit {

  constructor(public service: AccountService, private router: Router,
    public formBuilder: FormBuilder) {
      super();
    }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required])
    }, {validator: null});
  }

  onSubmit(sender: any): void {
    try {
      this.service.messages = [];
      this.service.errorMessages = [];

      const emailVal = this.formGroupRules.controls.email.value;

      this.service.domain = SettingComponent.authApiUrl;
      this.service.controller = 'ForgotPassword';

      this.service.submit({email: emailVal})
        .subscribe(
          (data: any[]) => this.responseResolve(data),
          (error: any) => this.service.exceptionResolve(error));;

    } catch (error) {
      console.error(error);
      this.service.openError();
    }
  }

  responseResolve(value: any[]): void{

  }
}
