import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBaseComponent } from '../../../../../components/controls/form-base.component';
import { Translate } from '../../../../../locales/translate';
import { Status } from '../../../../../models/enums/status.enum';
import { Address } from '../../../../../models/registers/address';
import { Person } from '../../../../../models/registers/person';
import { Guid } from '../../../../../models/shared/guid';
import { PersonService } from '../../../../../services/register/person.service';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: []
})
export class AddressItemComponent extends FormBaseComponent<Person> implements OnInit {

  @Input() item: Address;
  @Input() formGroup: FormGroup;
  @Input() translate: Translate;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  change(id: Guid) {
    this.formGroup.controls.id.setValue(id.toString());
    const idx: number = this.service.getCollectionIndex(this.service.entity.addresses, id);

    if (idx >= 0) {
      const contact = this.service.entity.addresses[idx];

      this.formGroup.controls.city.setValue(contact.city);
      this.formGroup.controls.complement.setValue(contact.complement);
      this.formGroup.controls.district.setValue(contact.district);
      this.formGroup.controls.fullStreetName.setValue(contact.fullStreetName);
      this.formGroup.controls.number.setValue(contact.number);
      this.formGroup.controls.postalCode.setValue(contact.postalCode);
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
    const idx: number = this.service.getCollectionIndex(this.service.entity.addresses, id);

    if (idx >= 0) {
      this.service.entity.addresses[idx].status = Status.deleted;
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
