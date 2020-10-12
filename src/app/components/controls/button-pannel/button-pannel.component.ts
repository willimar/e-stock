import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Translate } from '../../../locales/translate';
import { ButtonPannelTranslate } from './button-pannel.translate';

@Component({
  selector: 'app-button-pannel',
  templateUrl: './button-pannel.component.html',
  styleUrls: []
})
export class ButtonPannelComponent implements OnInit {

  translate: Translate = new Translate(new ButtonPannelTranslate());

  constructor() { }

  ngOnInit(): void {
  }

}
