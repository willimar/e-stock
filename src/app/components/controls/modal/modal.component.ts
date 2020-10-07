import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalType } from '../enums/modal-type.enum';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent implements OnInit {

  @Input() modalType: ModalType = ModalType.info;
  @Input() modalName: string = "";
  @Input() modalTitle: string = "";

  ngOnInit(): void {
  }

}
