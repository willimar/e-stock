import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Translate } from '../../../locales/translate';
import { StatusService } from '../../../services/enums/status-service.enum';
import { IService } from '../../../services/interfaces/iservice-interface';
import { ButtonPannelTranslate } from './button-pannel.translate';

@Component({
  selector: 'app-button-pannel',
  templateUrl: './button-pannel.component.html',
  styleUrls: []
})
export class ButtonPannelComponent implements OnInit {

  translate: Translate = new Translate(new ButtonPannelTranslate());
  status: StatusService = StatusService.browse;

  @Input() service: IService;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(value: StatusService) {
    this.status = value;
    this.service.setStatus(value);
  }

  getStatus(): StatusService {
    return this.status;
  }

}
