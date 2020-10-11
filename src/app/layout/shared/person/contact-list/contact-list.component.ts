import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from '../../../../components/controls/form-base.component';
import { ContactListComponentHtml } from '../../../../locales/translations/contact-list.component.html';
import { ContactType } from '../../../../models/enums/contact-type.enum';
import { Status } from '../../../../models/enums/status.enum';
import { Person } from '../../../../models/registers/person';
import { PersonalContact } from '../../../../models/registers/personal-contact';
import { PersonService } from '../../../../services/register/person.service';
import { Translate } from '../../../../locales/translate';
import { Guid } from '../../../../models/shared/guid';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: []
})
export class ContactListComponent extends FormBaseComponent<Person> implements OnInit {

  private contactTypeFormat = /^[1-5]$/;

  translate: Translate = new Translate(new ContactListComponentHtml());

  constructor(public formBuilder: FormBuilder, private http: HttpClient) {
    super();
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({
      id: this.formBuilder.control('', []),
      contactType: this.formBuilder.control('', [Validators.required, Validators.pattern(this.contactTypeFormat)]),
      value: this.formBuilder.control('', [Validators.required, ContactListComponent.valueValidate])
    }, {validator: ContactListComponent.equalTo});
  }

  static equalTo(group: AbstractControl):{[key:string]: boolean}{
    return undefined;
  }

  static valueValidate(control: any): {[key:string]: boolean} {

    if (control._parent === undefined) {
      return {noMatch: true};
    }

    const regexCheck = function(regexExp: RegExp): {[key: string]: boolean} {
      const value: string = <string>control.value;
      const match = value.match(regexExp);

      if (match && match.length > 0){
        return undefined;
      }
      else{
        return {noMatch: true};
      }
    }

    switch (control._parent.controls.contactType.value)
    {
      case (ContactType.blog):{
        return regexCheck(ContactListComponent.urlFormat);
      }
      case (ContactType.website):{
        return regexCheck(ContactListComponent.urlFormat);
      }
      case (ContactType.celphone):{
        return regexCheck(ContactListComponent.telephoneFormat);
      }
      case (ContactType.phone):{
        return regexCheck(ContactListComponent.telephoneFormat);
      }
      case (ContactType.email): {
        return regexCheck(ContactListComponent.emailFormat)
      }
      default: {
        return undefined;
      }
    }
  }

  getTypes(): any[] {
    const result = [];

    result.push({id: ContactType.blog, text: "Blog"});
    result.push({id: ContactType.celphone, text: "Celphone"});
    result.push({id: ContactType.email, text: "E-mail"});
    result.push({id: ContactType.phone, text: "Phone"});
    result.push({id: ContactType.website, text: "Website"});

    return result;
  }

  addItem(item: any) {
    this.service.errorMessages = [];

    if (this.formGroupRules.valid === false) {
      const message = {
        boxTitle: `Message type InvalidRecord`,
        boxText: `Code: 401 with message: ${this.translate.getString('InvalidRecord')}`,
        isError: true
      };

      this.service.errorMessages.push(message);
      this.service.openError();
      return;
    }

    const contact: PersonalContact = new PersonalContact();

    contact.contactType = this.formGroupRules.controls.contactType.value;
    contact.value = this.formGroupRules.controls.value.value;
    contact.status = Status.active;

    if (this.formGroupRules.controls.id.value === "" || this.formGroupRules.controls.id.value === undefined) {
      contact.id = Guid.newGuid();
      this.service.entity.personalContacts.push(contact);
    } else {
      contact.id = this.formGroupRules.controls.id.value;

      const idx: number = this.service.getCollectionIndex(this.service.entity.personalContacts, contact.id);
      this.service.entity.personalContacts[idx] = contact;
    }

    this.formGroupRules.controls.contactType.setValue(0);
    this.formGroupRules.controls.value.setValue(undefined);
    this.formGroupRules.controls.id.setValue(undefined);
  }

  isValid(): boolean {
    return this.formGroupRules.valid;
  }
}
