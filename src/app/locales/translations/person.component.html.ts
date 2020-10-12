import { ITranslate } from "../itranslate";
import { Locale } from "../locales";

export class PersonComponentHtml implements ITranslate {
  messages: { [id: string]: string; } = {
    [`tab-title-${Locale.enUs}`]: "Person",
    [`tab-title-${Locale.ptBR}`]: "Pessoa",
    [`person-info-tab-${Locale.enUs}`]: "General",
    [`person-info-tab-${Locale.ptBR}`]: "Geral",
    [`person-access-tab-${Locale.enUs}`]: "Access",
    [`person-access-tab-${Locale.ptBR}`]: "Acesso",
    [`person-dependents-tab-${Locale.enUs}`]: "Dependents",
    [`person-dependents-tab-${Locale.ptBR}`]: "Dependentes",
    [`person-contact-tab-${Locale.enUs}`]: "Contacts",
    [`person-contact-tab-${Locale.ptBR}`]: "Contatos",
    [`person-address-tab-${Locale.enUs}`]: "Adderess",
    [`person-address-tab-${Locale.ptBR}`]: "Endereços",
    [`person-document-tab-${Locale.enUs}`]: "Documents",
    [`person-document-tab-${Locale.ptBR}`]: "Documentos",
  };
}
