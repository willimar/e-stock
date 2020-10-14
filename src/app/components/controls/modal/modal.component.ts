import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalType } from '../enums/modal-type.enum';
import { ModalSize } from './modal.size.enum';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent implements OnInit {

  @Input() modalType: ModalType = ModalType.info;
  @Input() modalName: string = "";
  @Input() modalTitle: string = "";
  @Input() modalSize: ModalSize = ModalSize.normal;

  ngOnInit(): void {
  }

  getModalType(): string {
    switch (this.modalSize) {
      case ModalSize.big: return 'modal-lg';
      case ModalSize.extra: return 'modal-xl';
      case ModalSize.normal: return '';
      case ModalSize.small: return 'modal-sm';
    }
  }
}
