import { InputBaseComponent } from './../input-base/input-base.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: []
})
export class InputDateComponent extends InputBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
