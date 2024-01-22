import * as os from "os";
import { Language } from "./interface/langage.interface";
import { TempsDeLaJournee } from "./timeOfDay";

export class CheckPalindrome {
  private readonly _language: Language;
  private readonly _timeOfDay: TempsDeLaJournee;

  constructor(language: Language, time: TempsDeLaJournee) {
    this._language = language;
    this._timeOfDay = time;
  }

  public isPalindrome(message: string): string {
    let reverseMessage = message
      .toLocaleLowerCase()
      .split("")
      .reverse()
      .join("");

    let result =
      this._language.Salutation(this._timeOfDay) +
      os.EOL +
      reverseMessage +
      os.EOL;

    if (reverseMessage == message) {
      result += this._language.Felicitation() + os.EOL;
    }

    return result + this._language.AuRevoir();
  }
}