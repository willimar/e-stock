import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { Translate } from '../../../locales/translate';
import { Guid } from '../../../models/shared/guid';
import { StatusService } from '../../../services/enums/status-service.enum';
import { IService } from '../../../services/interfaces/iservice-interface';
import { ButtonPannelTranslate } from './button-pannel.translate';

@Component({
  selector: 'app-button-pannel',
  templateUrl: './button-pannel.component.html',
  styleUrls: []
})
export class ButtonPannelComponent implements OnInit {

  translate: Translate = new Translate(new ButtonPannelTranslate());
  status: StatusService = StatusService.browse;

  @Input() service: IService;

  @Output() onSave = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onInsert = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteExecute(value: any): void {
    this.onDelete.emit(value);
    this.changeStatus(StatusService.browse);
  }

  onCancelExecute(value: any): void {
    this.onCancel.emit(value);
    this.changeStatus(StatusService.browse);
  }

  onInsertExecute(value: any): void {
    this.onInsert.emit(value);

    if (this.service.entity.hasOwnProperty('id')) {
      this.service.entity.id = Guid.newGuid();
    }

    this.changeStatus(StatusService.insert);
  }

  onEditExecute(value: any): void {
    this.onEdit.emit(value);
    this.changeStatus(StatusService.edit);
  }

  onSaveExecute(value: any): void {
    this.onSave.emit(value);
    this.service.save(this.service.entity);
    console.log(this.service.status);
    if (this.service.status != StatusService.error) {
      this.changeStatus(StatusService.browse);
    }
  }

  changeStatus(value: StatusService) {
    this.status = value;
    this.service.setStatus(value);
  }

  getStatus(): StatusService {
    if (this.service.status == StatusService.saving || this.service.status == StatusService.error) {
      return StatusService.error
    } else {
      return this.status;
    }
  }

}
