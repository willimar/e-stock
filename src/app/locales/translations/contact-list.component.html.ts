import { ITranslate } from "../itranslate";
import { Locale } from "../locales";

export class ContactListComponentHtml implements ITranslate {
  messages: { [id: string]: string; } = {
    [`contact-type-${Locale.enUs}`]: "Type",
    [`contact-type-${Locale.ptBR}`]: "Tipo",
    [`contact-type-message-${Locale.enUs}`]: "Select a type",
    [`contact-type-message-${Locale.ptBR}`]: "Selecione o tipo",
    [`contact-value-${Locale.enUs}`]: "Value",
    [`contact-value-${Locale.ptBR}`]: "Valor",
    [`contact-value-message-${Locale.enUs}`]: "Type the contact value...",
    [`contact-value-message-${Locale.ptBR}`]: "Entre com o valor do contato...",
    [`InvalidRecord-${Locale.enUs}`]: "Invalid record type value...",
    [`InvalidRecord-${Locale.ptBR}`]: "Tipo de valor inválido...",
    [`type-${Locale.enUs}`]: "Type",
    [`type-${Locale.ptBR}`]: "Tipo",
    [`value-${Locale.enUs}`]: "Value",
    [`value-${Locale.ptBR}`]: "Valor",
    [`celphone-${Locale.enUs}`]: "Celphone",
    [`celphone-${Locale.ptBR}`]: "Celular",
    [`phone-${Locale.enUs}`]: "Phone",
    [`phone-${Locale.ptBR}`]: "Telefone",

  };
}
