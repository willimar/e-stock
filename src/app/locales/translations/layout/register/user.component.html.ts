import { ITranslate } from "../../../itranslate";
import { Locale } from "../../../locales";

export class UserComponentHtml implements ITranslate {
  messages: { [id: string]: string; } = {
    [`header-person-info-${Locale.enUs}`]: "Person information",
    [`header-person-info-${Locale.ptBR}`]: "Informações pessoais",
    [`header-user-info-${Locale.enUs}`]: "User information",
    [`header-user-info-${Locale.ptBR}`]: "Informações do usuário",
    [`save-${Locale.enUs}`]: "Save",
    [`save-${Locale.ptBR}`]: "Salvar",
  };
}
