import { Notification } from './../../../models/layout/header/Notification';
import { Message } from './../../../models/layout/header/Message';
import { UserInfo } from './../../../models/layout/login/UserInfo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  userName: UserInfo = { id: 'teste', firstName: 'Willimar', lastName: 'Rocha', nickName: 'Willimar'  };
  prefix = 'MC-Host';
  sufix = 'Base';
  prefixMin = 'MC';
  sufixMin = 'Host';
  messages: Message[] =
  [
    {
      message: 'Why not buy a new awesome theme?',
      subject: 'Support Team',
      from: { id: 'teste', firstName: 'Willimar', lastName: 'Rocha', nickName: 'Willimar' },
      sent: new Date(2018, 10, 15),
      to: { id: 'teste', firstName: 'Willimar', lastName: 'Rocha', nickName: 'Willimar' },
      ico: 'fa fa-users text-aqua'
    },
    {
      message: 'Why not buy a new awesome theme?',
      subject: 'Admin support request',
      from: { id: 'teste', firstName: 'Willimar', lastName: 'Rocha', nickName: 'Willimar' },
      sent: new Date(2018, 10, 15),
      to: { id: 'teste', firstName: 'Willimar', lastName: 'Rocha', nickName: 'Willimar' },
      ico: 'fa fa-users text-aqua'
    },
    {
      message: 'Why not buy a new awesome theme?',
      subject: 'Ask me about',
      from: { id: 'teste', firstName: 'Willimar', lastName: 'Rocha', nickName: 'Willimar' },
      sent: new Date(2018, 10, 15),
      to: { id: 'teste', firstName: 'Willimar', lastName: 'Rocha', nickName: 'Willimar' },
      ico: 'fa fa-users text-aqua'
    },
    {
      message: 'Why not buy a new awesome theme?',
      subject: 'System help',
      from: { id: 'teste', firstName: 'Willimar', lastName: 'Rocha', nickName: 'Willimar' },
      sent: new Date(2018, 10, 15),
      to: { id: 'teste', firstName: 'Willimar', lastName: 'Rocha', nickName: 'Willimar' },
      ico: 'fa fa-users text-aqua'
    },
    {
      message: 'Why not buy a new awesome theme?',
      subject: 'System options use',
      from: { id: 'teste', firstName: 'Willimar', lastName: 'Rocha', nickName: 'Willimar' },
      sent: new Date(2018, 10, 15),
      to: { id: 'teste', firstName: 'Willimar', lastName: 'Rocha', nickName: 'Willimar' },
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

  constructor() { }

  ngOnInit(): void {
  }

}
