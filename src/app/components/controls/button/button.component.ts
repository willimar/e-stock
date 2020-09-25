import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: []
})
export class ButtonComponent implements OnInit {

  @Input() faClass: string;
  @Input() caption: string;
  @Input() enable: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
