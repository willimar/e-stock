import { ITranslate } from "../itranslate";
import { Locale } from "../locales";

export class PersonInfoComponentHtml implements ITranslate {
  messages: { [id: string]: string; } = {
    [`header-${Locale.enUs}`]: "Personal Information",
    [`header-${Locale.ptBR}`]: "Informações pessoais",
    [`full-name-${Locale.enUs}`]: "Full name",
    [`full-name-${Locale.ptBR}`]: "Nome completo",
    [`full-name-message-${Locale.enUs}`]: "Tip your full name...",
    [`full-name-message-${Locale.ptBR}`]: "Entre com seu nome completo...",
    [`birth-${Locale.enUs}`]: "Birth",
    [`birth-${Locale.ptBR}`]: "Nascimento",
    [`nick-${Locale.enUs}`]: "Nick name",
    [`nick-${Locale.ptBR}`]: "Apelido",
    [`nick-message-${Locale.enUs}`]: "Tip your nick name...",
    [`nick-message-${Locale.ptBR}`]: "Entre com seu apelido...",
    [`birth-state-${Locale.enUs}`]: "Birth state",
    [`birth-state-${Locale.ptBR}`]: "UF de nascimento",
    [`birth-state-message-${Locale.enUs}`]: "Select a state...",
    [`birth-state-message-${Locale.ptBR}`]: "Selecione uma UF...",
    [`birth-city-${Locale.enUs}`]: "Birth city",
    [`birth-city-${Locale.ptBR}`]: "Cidade onde nasceu",
    [`bith-city-message-${Locale.enUs}`]: "Select a city...",
    [`bith-city-message-${Locale.ptBR}`]: "Selecione a cidade...",
    [`gender-${Locale.enUs}`]: "Gender",
    [`gender-${Locale.ptBR}`]: "Gênero",
    [`gender-message-${Locale.enUs}`]: "Select a gender...",
    [`gender-message-${Locale.ptBR}`]: "Selecione o gênero...",
    [`marital-status-${Locale.enUs}`]: "Marital status",
    [`marital-status-${Locale.ptBR}`]: "Estado civil",
    [`marital-status-message-${Locale.enUs}`]: "Select a marital status...",
    [`marital-status-message-${Locale.ptBR}`]: "Selecione o estado civil...",
    [`special-needs-${Locale.enUs}`]: "Special needs",
    [`special-needs-${Locale.ptBR}`]: "Portador de necessidades especiais",
  };
}
