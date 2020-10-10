import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: []
})
export class BoxComponent implements OnInit {

  @Input() boxTitle: string;
  @Input() useMinimize: boolean;
  @Input() boxClass: string;
  @Input() topLabel: string;

  constructor() {
    this.boxTitle = '';
    this.useMinimize = false;
    this.boxClass = 'card';
  }

  ngOnInit(): void {
  }

  GetBoxClass(): string{
    return `box ${this.boxClass}`;
  }

}
