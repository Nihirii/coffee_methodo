export class TempsDeLaJournee {
    private readonly _representation: string;

    public static Unknown: TempsDeLaJournee = new TempsDeLaJournee("Inconnu");
    public static Morning: TempsDeLaJournee = new TempsDeLaJournee("Matin");
    public static Afternoon: TempsDeLaJournee = new TempsDeLaJournee("Après-Midi");
    public static Evening: TempsDeLaJournee = new TempsDeLaJournee("Soirée");
    public static Night: TempsDeLaJournee = new TempsDeLaJournee("Nuit");

    private constructor(representation: string) {
        this._representation = representation;
    }

    public toString(){
        return this._representation;
    }
}