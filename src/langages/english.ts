import { Language } from "../interface/langage.interface";
import { Ponctualite } from "../interface/ponctualite.interface";
import { TempsDeLaJournee } from "../timeOfDay";

export class Anglais implements Language {
  public toString(): string {
    return "Langue : Anglais";
  }

  public Felicitation(): string {
    return Ponctualite.WELL_SAID;
  }

  public Salutation(time: TempsDeLaJournee): string {
    if (time == TempsDeLaJournee.Morning) return Ponctualite.GOOD_MORNING;

    if (time == TempsDeLaJournee.Afternoon) return Ponctualite.GOOD_AFTERNOON;

    if (time == TempsDeLaJournee.Evening) return Ponctualite.GOOD_EVENING;

    if (time == TempsDeLaJournee.Night) return Ponctualite.GOOD_NIGHT;

    return Ponctualite.HELLO;
  }

  public AuRevoir(): string {
    return Ponctualite.GOODBYE;
  }
}