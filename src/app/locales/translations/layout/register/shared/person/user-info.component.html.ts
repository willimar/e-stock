import { ITranslate } from "../../../../../itranslate";
import { Locale } from "../../../../../locales";

export class UserInfoComponentHtml implements ITranslate {
  messages: { [id: string]: string; } = {
    [`header-${Locale.enUs}`]: "User information",
    [`header-${Locale.ptBR}`]: "Informações de usuário",
    [`user-name-${Locale.enUs}`]: "User name",
    [`user-name-${Locale.ptBR}`]: "Usuário",
    [`user-name-message-${Locale.enUs}`]: "Tip your user name...",
    [`user-name-message-${Locale.ptBR}`]: "Entre com seu usuário...",
    [`e-mail-${Locale.enUs}`]: "E-mail",
    [`e-mail-${Locale.ptBR}`]: "E-mail",
    [`e-mail-message-${Locale.enUs}`]: "Tip your e-mail...",
    [`e-mail-message-${Locale.ptBR}`]: "Entre com seu e-mail...",
    [`password-${Locale.enUs}`]: "Password [8 numbers and chars]",
    [`password-${Locale.ptBR}`]: "Senha [8 número e letras]",
    [`password-message-${Locale.enUs}`]: "Minimun 8 chars...",
    [`password-message-${Locale.ptBR}`]: "Tamanho mínimo é 8...",
    [`repeat-password-${Locale.enUs}`]: "Repeat password",
    [`repeat-password-${Locale.ptBR}`]: "Repetir senha",
    [`repeat-password-message-${Locale.enUs}`]: "Retip your password...",
    [`repeat-password-message-${Locale.ptBR}`]: "Repita sua senha...",
  };
}
