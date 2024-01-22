import { Francais } from "../src/langages/francais"
import { Ponctualite } from "../src/interface/ponctualite.interface";
import { Anglais } from "../src/langages/english";
import { Language } from "../src/interface/langage.interface";
import { TempsDeLaJournee } from "../src/timeOfDay";

describe("Vérification des langues", () => {
  test.each([
    [new Francais(), TempsDeLaJournee.Unknown, Ponctualite.BONJOUR],
    [new Francais(), TempsDeLaJournee.Morning, Ponctualite.BONJOUR],
    [new Francais(), TempsDeLaJournee.Afternoon, Ponctualite.BONJOUR],
    [new Francais(), TempsDeLaJournee.Evening, Ponctualite.BONSOIR],
    [new Francais(), TempsDeLaJournee.Night, Ponctualite.BONSOIR],
    [new Anglais(), TempsDeLaJournee.Unknown, Ponctualite.HELLO],
    [new Anglais(), TempsDeLaJournee.Morning, Ponctualite.GOOD_MORNING],
    [new Anglais(), TempsDeLaJournee.Afternoon, Ponctualite.GOOD_AFTERNOON],
    [new Anglais(), TempsDeLaJournee.Evening, Ponctualite.GOOD_EVENING],
    [new Anglais(), TempsDeLaJournee.Night, Ponctualite.GOOD_NIGHT],
  ])(
    "En %s on salue le %s par '%s'",
    (language: Language, time: TempsDeLaJournee, expectedMoment: string) => {
      expect(language.Salutation(time)).toBe(expectedMoment);
    }
  );
});