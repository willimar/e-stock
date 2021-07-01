import { ITranslate } from "../../../../../itranslate";
import { Locale } from "../../../../../locales";

export class PersonViewComponentComponentHtml implements ITranslate {
  messages: { [id: string]: string; } = {
    [`title-${Locale.enUs}`]: "Title",
    [`title-${Locale.ptBR}`]: "Título",
    [`person-info-title-${Locale.enUs}`]: "Personal information",
    [`person-info-title-${Locale.ptBR}`]: "Informações pessoais",
    [`full-name-${Locale.enUs}`]: "Full name",
    [`full-name-${Locale.ptBR}`]: "Nome completo",
    [`birth-day-${Locale.enUs}`]: "Birth day",
    [`birth-day-${Locale.ptBR}`]: "Data de nascimento",
    [`birth-day-format-${Locale.enUs}`]: "yyyy/MM/dd",
    [`birth-day-format-${Locale.ptBR}`]: "dd/MM/yyyy",
    [`nick-name-${Locale.enUs}`]: "Nick name",
    [`nick-name-${Locale.ptBR}`]: "Apelido",
    [`birth-birthCity-${Locale.enUs}`]: "Birth city",
    [`birth-birthCity-${Locale.ptBR}`]: "Cidade natal",
    [`gender-${Locale.enUs}`]: "Gender",
    [`gender-${Locale.ptBR}`]: "Gênero",
    [`marital-status-${Locale.enUs}`]: "Marital status",
    [`marital-status-${Locale.ptBR}`]: "Estado cívil",
    [`marital-status-1-${Locale.enUs}`]: "Married",
    [`marital-status-1-${Locale.ptBR}`]: "Casado",
    [`marital-status-2-${Locale.enUs}`]: "Single",
    [`marital-status-2-${Locale.ptBR}`]: "Solteiro",
    [`marital-status-3-${Locale.enUs}`]: "Widower",
    [`marital-status-3-${Locale.ptBR}`]: "Viúvo",
    [`gender-1-${Locale.enUs}`]: "Female",
    [`gender-1-${Locale.ptBR}`]: "Feminino",
    [`gender-2-${Locale.enUs}`]: "Male",
    [`gender-2-${Locale.ptBR}`]: "Masculino",
  };
}
