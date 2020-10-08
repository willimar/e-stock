import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormBaseComponent } from '../../../../../components/controls/form-base.component';
import { Locale } from '../../../../../locales/locales';
import { SetupLocale } from '../../../../../locales/setup-locale';
import { UserSetup } from '../../../../../models/registers/user-setup';
import { SettingComponent } from '../../setting.component';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: []
})
export class UserSettingComponent extends FormBaseComponent<UserSetup> implements OnInit {

  constructor(private http: HttpClient) {
    super();
   }

  ngOnInit(): void {

  }

  getLocales(): any[] {
    const result = [];

    result.push({id: Locale.enUs, text: "North America English"});
    result.push({id: Locale.ptBR, text: "Brazilian"});

    return result;
  }

  getLocale(): Locale {
    return SetupLocale.locale;
  }

  setLocale(value: any): void {
    SetupLocale.locale = value;
    window.localStorage.setItem('locale', SetupLocale.locale)
  }

}
