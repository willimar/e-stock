import { Component, Input, OnInit } from '@angular/core';
import { Translate } from '../../../../../locales/translate';
import { IService } from '../../../../../services/interfaces/iservice-interface';

@Component({
  selector: 'app-person-info-view',
  templateUrl: './person-info-view.component.html',
  styleUrls: []
})
export class PersonInfoViewComponent implements OnInit {

  @Input() service: IService;
  @Input() translate: Translate;

  constructor() { }

  ngOnInit(): void {
  }

}
