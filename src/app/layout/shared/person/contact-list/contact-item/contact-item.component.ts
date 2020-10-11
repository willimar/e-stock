import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBaseComponent } from '../../../../../components/controls/form-base.component';
import { Translate } from '../../../../../locales/translate';
import { ContactType } from '../../../../../models/enums/contact-type.enum';
import { Status } from '../../../../../models/enums/status.enum';
import { Person } from '../../../../../models/registers/person';
import { PersonalContact } from '../../../../../models/registers/personal-contact';
import { Guid } from '../../../../../models/shared/guid';
import { PersonService } from '../../../../../services/register/person.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: []
})
export class ContactItemComponent extends FormBaseComponent<Person> implements OnInit {

  @Input() item: PersonalContact;
  @Input() personService: PersonService;
  @Input() formGroup: FormGroup;
  @Input() translate: Translate;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  change(id: Guid) {
    this.formGroup.controls.id.setValue(id.toString());
    const idx: number = this.service.getCollectionIndex(this.service.entity.personalContacts, id);

    if (idx >= 0) {
      const contact = this.service.entity.personalContacts[idx];

      this.formGroup.controls.contactType.setValue(contact.contactType);
      this.formGroup.controls.value.setValue(contact.value);
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
    const idx: number = this.service.getCollectionIndex(this.service.entity.personalContacts, id);

    if (idx >= 0) {
      this.service.entity.personalContacts[idx].status = Status.deleted;
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

  getContactName(contactType: ContactType): string{
    switch(contactType){
      case ContactType.blog: return "Blog";
      case ContactType.celphone: return "Celphone";
      case ContactType.phone: return "Phone";
      case ContactType.email: return "E-Mail";
      case ContactType.website: return "WebSite";
      default: "Unknow";
    }
  }

}
