import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-success',
  templateUrl: './box-success.component.html',
  styleUrls: []
})
export class BoxSuccessComponent implements OnInit {

  @Input() public boxTitle: string;
  @Input() public boxText: string;
  @Input() public showCloseButton: boolean;

  constructor() {
    this.showCloseButton = false;
  }

  ngOnInit(): void {
  }

}
