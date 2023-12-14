export class Pieces {

    private readonly _biff: string;

    public static UnCentime: Pieces = new Pieces("Un Centime");
    public static DeuxCentime: Pieces = new Pieces("Deux Centime");
    public static CinqCentime: Pieces = new Pieces("Cinq Centime");
    public static DixCentime: Pieces = new Pieces("Dix Centime");
    public static VingtCentime: Pieces = new Pieces("Vingt Centime");
    public static CinquanteCentimes: Pieces = new Pieces("Cinquante Centimes");
    public static UnEuro: Pieces = new Pieces("Un Euro");
    public static DeuxEuro: Pieces = new Pieces("DeuxEuro");


    private constructor(biff: string) {
        this._biff = biff;
    }

    public toString () {
        return this._biff;
    }
}