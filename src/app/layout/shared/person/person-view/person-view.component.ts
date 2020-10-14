import { Component, Input, OnInit } from '@angular/core';
import { Translate } from '../../../../locales/translate';
import { IService } from '../../../../services/interfaces/iservice-interface';
import { PersonViewComponentComponentHtml } from '../../../../locales/translations/person-view.component.html';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: []
})
export class PersonViewComponent implements OnInit {

  @Input() service: IService;

  translate: Translate = new Translate(new PersonViewComponentComponentHtml());

  constructor() { }

  ngOnInit(): void {
  }

}
