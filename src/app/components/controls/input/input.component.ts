import { InputBaseComponent } from './../input-base/input-base.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: []
})
export class InputComponent extends InputBaseComponent implements OnInit {

  @Input() style: string;

  ngOnInit(): void {
  }

}
