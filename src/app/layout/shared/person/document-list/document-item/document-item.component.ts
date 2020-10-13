import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBaseComponent } from '../../../../../components/controls/form-base.component';
import { Translate } from '../../../../../locales/translate';
import { Status } from '../../../../../models/enums/status.enum';
import { Document } from '../../../../../models/registers/document';
import { Person } from '../../../../../models/registers/person';
import { Guid } from '../../../../../models/shared/guid';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: []
})
export class DocumentItemComponent extends FormBaseComponent<Person> implements OnInit {

  @Input() item: Document;
  @Input() formGroup: FormGroup;
  @Input() translate: Translate;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  change(id: Guid) {
    this.formGroup.controls.id.setValue(id.toString());
    const idx: number = this.service.getCollectionIndex(this.service.entity.documents, id);

    if (idx >= 0) {
      const contact = this.service.entity.documents[idx];

      this.formGroup.controls.name.setValue(contact.name);
      this.formGroup.controls.value.setValue(contact.value);
      this.formGroup.controls.emissionDate.setValue(contact.emissionDate);
      this.formGroup.controls.complement.setValue(contact.complement);
      this.formGroup.controls.id.setValue(contact.id);
    } else {
      const message = {
        boxTitle: `Message type InvalidRecord`,
        boxText: `Code: 401 with message: ${this.translate.getString('InvalidRecord')}`,
        isError: true
      };

      this.service.errorMessages.push(message);
      this.service.openError();
    }
  }

  remove(id: Guid) {
    this.formGroup.controls.id.setValue(undefined);
    const idx: number = this.service.getCollectionIndex(this.service.entity.documents, id);

    if (idx >= 0) {
      this.service.entity.documents[idx].status = Status.deleted;
    } else {
      const message = {
        boxTitle: `Message type InvalidRecord`,
        boxText: `Code: 401 with message: ${this.translate.getString('InvalidRecord')}`,
        isError: true
      };

      this.service.errorMessages.push(message);
      this.service.openError();
    }
  }

}
