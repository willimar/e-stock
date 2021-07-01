import { ITranslate } from "../../../../../itranslate";
import { Locale } from "../../../../../locales";

export class AddressListComponentHtml implements ITranslate {
  messages: { [id: string]: string; } = {
    [`postal-code-${Locale.enUs}`]: "Postal code",
    [`postal-code-${Locale.ptBR}`]: "CEP",
    [`postal-code-message-${Locale.enUs}`]: "Type your postal code...",
    [`postal-code-message-${Locale.ptBR}`]: "Entre com seu CEP...",
    [`city-${Locale.enUs}`]: "City",
    [`city-${Locale.ptBR}`]: "Cidade",
    [`city-message-${Locale.enUs}`]: "Type your city name...",
    [`city-message-${Locale.ptBR}`]: "Entre com sua cidade...",
    [`full-street-name-${Locale.enUs}`]: "Street",
    [`full-street-name-${Locale.ptBR}`]: "Rua",
    [`full-street-name-message-${Locale.enUs}`]: "Type your street name...",
    [`full-street-name-message-${Locale.ptBR}`]: "Entre com sua rua...",
    [`number-${Locale.enUs}`]: "Number",
    [`number-${Locale.ptBR}`]: "Número",
    [`number-message-${Locale.enUs}`]: "",
    [`number-message-${Locale.ptBR}`]: "",
    [`district-${Locale.enUs}`]: "District",
    [`district-${Locale.ptBR}`]: "Bairro",
    [`district-message-${Locale.enUs}`]: "Type yout district name...",
    [`district-message-${Locale.ptBR}`]: "Entre com o bairro...",
    [`complement-${Locale.enUs}`]: "Complement",
    [`complement-${Locale.ptBR}`]: "Complemento",
    [`complement-message-${Locale.enUs}`]: "Type address complement...",
    [`complement-message-${Locale.ptBR}`]: "Entre com o complemento...",

  };
}
