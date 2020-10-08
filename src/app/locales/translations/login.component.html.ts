import { ITranslate } from "../itranslate";
import { Locale } from "../locales";

export class LoginComponentHtml implements ITranslate {
  messages: { [id: string]: string; } = {
    [`login-${Locale.enUs}`]: "Login",
    [`login-${Locale.ptBR}`]: "Autenticação",
    [`userName-${Locale.enUs}`]: "User name",
    [`userName-${Locale.ptBR}`]: "Nome de usuário",
    [`userNameMessage-${Locale.enUs}`]: "User name or e-mail...",
    [`userNameMessage-${Locale.ptBR}`]: "Nome de usuário ou e-mail...",
    [`password-${Locale.enUs}`]: "Password",
    [`password-${Locale.ptBR}`]: "Senha",
    [`password-message-${Locale.enUs}`]: "User password...",
    [`password-message-${Locale.ptBR}`]: "Senha do usuário...",
    [`enter-${Locale.enUs}`]: "Enter",
    [`enter-${Locale.ptBR}`]: "Entrar",
    [`forgot-password-${Locale.enUs}`]: "Forgot your password?",
    [`forgot-password-${Locale.ptBR}`]: "Esqueceu a sua senha?",
    [`new-account-${Locale.enUs}`]: "Create an account.",
    [`new-account-${Locale.ptBR}`]: "Criar uma conta.",
    [`loged-message-${Locale.enUs}`]: "You are logged in system.",
    [`loged-message-${Locale.ptBR}`]: "Você está logado no sistema.",
    [`system-access-${Locale.enUs}`]: "System access.",
    [`system-access-${Locale.ptBR}`]: "Acesso ao sistema.",
    [`access-danied-${Locale.enUs}`]: "Access danied.",
    [`access-danied-${Locale.ptBR}`]: "Acesso negado."

  };
}
