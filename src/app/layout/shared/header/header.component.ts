import { PersonInfo } from './../../../models/registers/person-info';
import { Person } from './../../../models/registers/person';
import { Notification } from './../../../models/layout/header/Notification';
import { Message } from './../../../models/layout/header/Message';
import { Component, OnInit } from '@angular/core';
import { SettingComponent } from './../setting/setting.component';
import { SetupLocale } from '../../../locales/setup-locale';
import { Locale } from '../../../locales/locales';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  userName: PersonInfo = new PersonInfo();
  prefix = 'e';
  sufix = 'Stock';
  prefixMin = 'e';
  sufixMin = 'S';
  messages: Message[] =
  [
    {
      message: 'Why not buy a new awesome theme?',
      subject: 'Support Team',
      from: new PersonInfo(),
      sent: new Date(2018, 10, 15),
      to: new PersonInfo(),
      ico: 'fa fa-users text-aqua'
    },
    {
      message: 'Why not buy a new awesome theme?',
      subject: 'Admin support request',
      from: new PersonInfo(),
      sent: new Date(2018, 10, 15),
      to: new PersonInfo(),
      ico: 'fa fa-users text-aqua'
    },
    {
      message: 'Why not buy a new awesome theme?',
      subject: 'Ask me about',
      from: new PersonInfo(),
      sent: new Date(2018, 10, 15),
      to: new PersonInfo(),
      ico: 'fa fa-users text-aqua'
    },
    {
      message: 'Why not buy a new awesome theme?',
      subject: 'System help',
      from: new PersonInfo(),
      sent: new Date(2018, 10, 15),
      to: new PersonInfo(),
      ico: 'fa fa-users text-aqua'
    },
    {
      message: 'Why not buy a new awesome theme?',
      subject: 'System options use',
      from: new PersonInfo(),
      sent: new Date(2018, 10, 15),
      to: new PersonInfo(),
      ico: 'fa fa-users text-aqua'
    }
  ];

  notications: Notification[] = [
    {
      message: '5 new members joined today',
      notificationType: 0,
      ico: 'fa fa-users text-aqua'
    },
    {
      message: ' Very long description here that may not fit into the page and may cause design problems.',
      notificationType: 0,
      ico: 'fa fa-users text-aqua'
    },
    {
      message: '25 sales made',
      notificationType: 0,
      ico: 'fa fa-users text-aqua'
    },
    {
      message: 'you change your user name',
      notificationType: 0,
      ico: 'fa fa-users text-aqua'
    }
  ];

  constructor() {
    this.userName.name = 'Willimar Augusto Rocha';
  }

  isLoged(): boolean {
    return SettingComponent.logged;
  }

  ngOnInit(): void {
  }

  getLocale(): Locale {
    return SetupLocale.locale;
  }

  changeLocale(locale: any) {
    SetupLocale.locale = locale;
  }
}
