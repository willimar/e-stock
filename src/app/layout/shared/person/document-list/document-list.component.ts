import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FormBaseComponent } from '../../../../components/controls/form-base.component';
import { Translate } from '../../../../locales/translate';
import { DocumentListComponentHtml } from '../../../../locales/translations/document-list.component.html';
import { DocumentType } from '../../../../models/enums/document-type-enum';
import { Status } from '../../../../models/enums/status.enum';
import { Document } from '../../../../models/registers/document';
import { Person } from '../../../../models/registers/person';
import { Guid } from '../../../../models/shared/guid';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: []
})
export class DocumentListComponent extends FormBaseComponent<Person> implements OnInit {

  translate: Translate = new Translate(new DocumentListComponentHtml());

  constructor(public formBuilder: FormBuilder, private http: HttpClient) {
    super();
  }

  ngOnInit(): void {
    this.formGroupRules = this.formBuilder.group({
      id: this.formBuilder.control('', []),
      name: this.formBuilder.control('', [Validators.required]),
      value: this.formBuilder.control('', [Validators.required]),
      emissionDate: this.formBuilder.control('', []),
      complement: this.formBuilder.control('', [])
    }, {validator: DocumentListComponent.equalTo});
  }

  static equalTo(group: AbstractControl):{[key:string]: boolean}{
    return undefined;
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

    const contact: Document = new Document();

    contact.name = this.formGroupRules.controls.name.value;
    contact.value = this.formGroupRules.controls.value.value;
    contact.emissionDate = this.formGroupRules.controls.emissionDate.value;
    contact.complement = this.formGroupRules.controls.complement.value;
    contact.status = Status.active;

    if (this.formGroupRules.controls.id.value === "" || this.formGroupRules.controls.id.value === undefined) {
      contact.id = Guid.newGuid();
      this.service.entity.documents.push(contact);
    } else {
      contact.id = this.formGroupRules.controls.id.value;

      const idx: number = this.service.getCollectionIndex(this.service.entity.documents, contact.id);
      this.service.entity.documents[idx] = contact;
    }

    this.formGroupRules.controls.name.setValue(undefined);
    this.formGroupRules.controls.value.setValue(undefined);
    this.formGroupRules.controls.emissionDate.setValue(undefined);
    this.formGroupRules.controls.complement.setValue(undefined);
    this.formGroupRules.controls.id.setValue(undefined);
  }

  isValid(): boolean {
    return this.formGroupRules.valid;
  }

  getTypes(): any[] {
    const result = [];

    result.push({id: DocumentType.cpf, text: this.translate.getString(DocumentType.cpf)});
    result.push({id: DocumentType.cnpj, text: this.translate.getString(DocumentType.cnpj)});
    result.push({id: DocumentType.cnh, text: this.translate.getString(DocumentType.cnh)});
    result.push({id: DocumentType.rg, text: this.translate.getString(DocumentType.rg)});
    result.push({id: DocumentType.titulo_eleitor, text: this.translate.getString(DocumentType.titulo_eleitor)});
    result.push({id: DocumentType.certificado_reservista, text: this.translate.getString(DocumentType.certificado_reservista)});

    return result;
  }

}
