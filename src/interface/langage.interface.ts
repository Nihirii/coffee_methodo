import { TimeOfDay } from "../timeOfDay";

export interface Language {
  
  Felicitation(): string;

  Salutation(temps: TimeOfDay): string;

  AuRevoir(): string;
}