import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Translate } from '../../../locales/translate';
import { ButtonPannelTranslate } from './button-pannel.translate';
import { StatusPannel } from './status-pannel.enum';

@Component({
  selector: 'app-button-pannel',
  templateUrl: './button-pannel.component.html',
  styleUrls: []
})
export class ButtonPannelComponent implements OnInit {

  translate: Translate = new Translate(new ButtonPannelTranslate());
  status: StatusPannel = StatusPannel.browse;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(value: StatusPannel) {
    this.status = value;
  }

  getStatus(): StatusPannel {
    return this.status;
  }

}
