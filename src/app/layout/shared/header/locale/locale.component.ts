import { Component, OnInit } from '@angular/core';
import { Locale } from '../../../../locales/locales';
import { SetupLocale } from '../../../../locales/setup-locale';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: []
})
export class LocaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getLocale(): Locale {
    return SetupLocale.locale;
  }

  changeLocale(locale: any) {
    SetupLocale.locale = locale;
  }
}
