import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-error',
  templateUrl: './box-error.component.html',
  styleUrls: []
})
export class BoxErrorComponent implements OnInit {

  @Input() public boxTitle: string;
  @Input() public boxText: string;
  @Input() public showCloseButton: boolean;

  constructor() {
    this.showCloseButton = false;
  }

  ngOnInit(): void {
  }

}
