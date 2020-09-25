import { InputBase } from './../input-base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-check',
  templateUrl: './input-check.component.html',
  styleUrls: []
})
export class InputCheckComponent extends InputBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
