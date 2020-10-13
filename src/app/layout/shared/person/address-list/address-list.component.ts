import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FormBaseComponent } from '../../../../components/controls/form-base.component';
import { Translate } from '../../../../locales/translate';
import { AddressListComponentHtml } from '../../../../locales/translations/address-list.component.html';
import { Status } from '../../../../models/enums/status.enum';
import { Address } from '../../../../models/registers/address';
import { Person } from '../../../../models/registers/person';
import { Guid } from '../../../../models/shared/guid';
import { BaseService } from '../../../../services/shared/base.service';
import { PostalCodeService } from '../../../../services/shared/postal-code-service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: []
})
export class AddressListComponent extends FormBaseComponent<Person> implements OnInit {

  translate: Translate = new Translate(new AddressListComponentHtml());

  constructor(public formBuilder: FormBuilder, private http: HttpClient, private postalCodeService: PostalCodeService) {
    super();
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({
      id: this.formBuilder.control('', []),
      city: this.formBuilder.control('', [Validators.required]),
      complement: this.formBuilder.control('', []),
      district: this.formBuilder.control('', [Validators.required]),
      fullStreetName: this.formBuilder.control('', [Validators.required]),
      number: this.formBuilder.control('', [Validators.required]),
      postalCode: this.formBuilder.control('', [Validators.required, Validators.pattern(FormBaseComponent.postalCodeFormat)]),
    }, {validator: AddressListComponent.equalTo});
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

    const contact: Address = new Address();

    contact.city = this.formGroupRules.controls.city.value;
    contact.complement = this.formGroupRules.controls.complement.value;
    contact.district = this.formGroupRules.controls.district.value;
    contact.fullStreetName = this.formGroupRules.controls.fullStreetName.value;
    contact.number = this.formGroupRules.controls.number.value;
    contact.postalCode = this.formGroupRules.controls.postalCode.value;
    contact.status = Status.active;

    if (this.formGroupRules.controls.id.value === "" || this.formGroupRules.controls.id.value === undefined) {
      contact.id = Guid.newGuid();
      this.service.entity.addresses.push(contact);
    } else {
      contact.id = this.formGroupRules.controls.id.value;

      const idx: number = this.service.getCollectionIndex(this.service.entity.addresses, contact.id);
      this.service.entity.addresses[idx] = contact;
    }

    this.formGroupRules.controls.city.setValue(undefined);
    this.formGroupRules.controls.complement.setValue(undefined);
    this.formGroupRules.controls.district.setValue(undefined);
    this.formGroupRules.controls.fullStreetName.setValue(undefined);
    this.formGroupRules.controls.number.setValue(undefined);
    this.formGroupRules.controls.postalCode.setValue(undefined);
    this.formGroupRules.controls.id.setValue(undefined);
  }

  isValid(): boolean {
    return this.formGroupRules.valid;
  }

  static equalTo(group: AbstractControl):{[key:string]: boolean}{
    return undefined;
  }

  loadCep(cep: string) {

    this.formGroupRules.controls.fullStreetName.setValue(undefined);
    this.formGroupRules.controls.number.setValue(undefined);
    this.formGroupRules.controls.complement.setValue(undefined);
    this.formGroupRules.controls.district.setValue(undefined);
    this.formGroupRules.controls.city.setValue(undefined);

    cep = cep.replace('-', '').replace('.', '');
    if (cep.length === 8) {
      cep = `${cep.substr(0, 5)}-${cep.substr(5, 3)}`;
    }

    this.formGroupRules.controls.postalCode.setValue(cep);

    const result = this.postalCodeService.loadAddress(cep);
    if (result != undefined) {
      result
        .subscribe(
          (data: any) => {
            const address = data.data.address[0];
            this.formGroupRules.controls.fullStreetName.setValue(address.streetName);
            this.formGroupRules.controls.number.setValue(address.number);
            this.formGroupRules.controls.complement.setValue(address.complement);
            this.formGroupRules.controls.district.setValue(address.district);
            this.formGroupRules.controls.city.setValue(address.city.name);
          },
          (error: any) => this.service.exceptionResolve(error));
    }
  }
}
