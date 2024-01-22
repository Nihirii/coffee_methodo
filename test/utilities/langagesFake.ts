import { Language } from "../../src/interface/langage.interface";
import { TempsDeLaJournee } from "../../src/timeOfDay";

export class LanguagesFake implements Language {
  Felicitation(): string {
    return "Félicitations !";
  }

  Salutation(time: TempsDeLaJournee): string {
    return "Salut /" + time.toString();
  }

  AuRevoir(): string {
    return "Bye bye !";
  }
}