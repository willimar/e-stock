import { ITranslate } from "./itranslate";
import { SetupLocale } from "./setup-locale";

export class Translate {
  constructor(private translator: ITranslate)
  {

  }

  public GetString(key: string): string {
    let flag: string = SetupLocale.locale;

    if (SetupLocale.locale.length > 0) {
      flag = `-${flag}`
    }

    return this.translator.messages[`${key}${flag}`];
  }
}
