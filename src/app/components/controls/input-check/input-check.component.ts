import { InputBaseComponent } from './../input-base/input-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-check',
  templateUrl: './input-check.component.html',
  styleUrls: []
})
export class InputCheckComponent extends InputBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
