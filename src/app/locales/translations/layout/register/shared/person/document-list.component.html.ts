import { DocumentType } from "../../../../../../models/enums/document-type-enum";
import { ITranslate } from "../../../../../itranslate";
import { Locale } from "../../../../../locales";

export class DocumentListComponentHtml implements ITranslate {
  messages: { [id: string]: string; } = {
    [`name-${Locale.enUs}`]: "Type",
    [`name-${Locale.ptBR}`]: "Tipo",
    [`mane-message-${Locale.enUs}`]: "Select a type...",
    [`name-message-${Locale.ptBR}`]: "Selecione um tipo...",
    [`value-${Locale.enUs}`]: "Value",
    [`value-${Locale.ptBR}`]: "Valor",
    [`value-message-${Locale.enUs}`]: "Tip the value...",
    [`value-message-${Locale.ptBR}`]: "Entre com o valor...",
    [`emission-date-${Locale.enUs}`]: "Emission date",
    [`emission-date-${Locale.ptBR}`]: "Data de emissão",
    [`emission-date-message-${Locale.enUs}`]: "",
    [`emission-date-message-${Locale.ptBR}`]: "",
    [`emission-date-format-${Locale.enUs}`]: 'yyyy/dd/MM',
    [`emission-date-format-${Locale.ptBR}`]: 'dd/MM/yyyy',
    [`complement-${Locale.enUs}`]: "Complement",
    [`complement-${Locale.ptBR}`]: "Complemento",
    [`complement-message-${Locale.enUs}`]: "If needs, tip the complement...",
    [`complement-message-${Locale.ptBR}`]: "Se necessário, informe o complemento...",
    [`${DocumentType.cpf}-${Locale.enUs}`]: "Social Security Administration",
    [`${DocumentType.cpf}-${Locale.ptBR}`]: "CPF",
    [`${DocumentType.cnpj}-${Locale.enUs}`]: "EIN",
    [`${DocumentType.cnpj}-${Locale.ptBR}`]: "CNPJ",
    [`${DocumentType.cnh}-${Locale.enUs}`]: "Driver license",
    [`${DocumentType.cnh}-${Locale.ptBR}`]: "CNH",
    [`${DocumentType.titulo_eleitor}-${Locale.enUs}`]: "Título de eleitor",
    [`${DocumentType.titulo_eleitor}-${Locale.ptBR}`]: "Título de eleitor",
    [`${DocumentType.certificado_reservista}-${Locale.enUs}`]: "Certificado de reservista",
    [`${DocumentType.certificado_reservista}-${Locale.ptBR}`]: "Certificado de reservista",
    [`${DocumentType.rg}-${Locale.enUs}`]: "Others",
    [`${DocumentType.rg}-${Locale.ptBR}`]: "RG",

  };
}
