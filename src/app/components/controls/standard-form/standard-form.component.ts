import { IColumnDef } from './../../interfaces/icolumn-def';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: []
})
export class StandardFormComponent implements OnInit {

  @Input() columns: IColumnDef[];
  @Input() viewName: string;

  @Output() selectionChanged = new EventEmitter();
  @Output() openDetail = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  detailOpenEvent(value: any): void {
    this.openDetail.emit(value);
  }

  onSelectionChanged(value: any): void {
    this.selectionChanged.emit(value);
  }


}
