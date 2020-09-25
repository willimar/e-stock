import { InputBase } from './../input-base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: []
})
export class InputDateComponent extends InputBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
