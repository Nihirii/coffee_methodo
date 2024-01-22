import { Language } from "../interface/langage.interface";
import { Ponctualite } from "../interface/ponctualite.interface";
import { TempsDeLaJournee } from "../timeOfDay";

export class Francais implements Language {
  public toString(): string {
    return "Langue : Français";
  }

  public Felicitation(): string {
    return Ponctualite.BIEN_DIT;
  }

  public Salutation(time: TempsDeLaJournee): string {
    if (time == TempsDeLaJournee.Evening || time == TempsDeLaJournee.Night)
      return Ponctualite.BONSOIR;
    return Ponctualite.BONJOUR;
  }

  public AuRevoir(): string {
    return Ponctualite.AU_REVOIR;
  }
}