import { ITranslate } from "../../../locales/itranslate";
import { Locale } from "../../../locales/locales";

export class ButtonPannelTranslate implements ITranslate {
  messages: { [id: string]: string; } = {
    [`new-${Locale.enUs}`]: "New",
    [`new-${Locale.ptBR}`]: "Novo",
    [`edit-${Locale.enUs}`]: "Edit",
    [`edit-${Locale.ptBR}`]: "Editar",
    [`save-${Locale.enUs}`]: "Save",
    [`save-${Locale.ptBR}`]: "Salvar",
    [`delete-${Locale.enUs}`]: "Delete",
    [`delete-${Locale.ptBR}`]: "Escluir",
    [`search-${Locale.enUs}`]: "Search",
    [`search-${Locale.ptBR}`]: "Localizar",
    [`cancel-${Locale.enUs}`]: "Cancel",
    [`cancel-${Locale.ptBR}`]: "Cancelar",

  };
}
