import { Pay } from "./pay.interface";
import { Pieces } from "./pieces";


export class MachineACafe implements Pay {

    public Payer (piece: Pieces): string {
        return `Une piece de ${piece} est insere`;
    }

    public Rembourser (): string {
        return 'La machine rembourse le client';
    }

    public ServirUnCafe(): string {
        return 'Le cafe est servi';
    }

    public Encaisser(): string {
        return 'L\'argent est encaisse';
    }

    public Verifier (piece: Pieces): boolean {
        if (piece == Pieces.UnCentime 
            || piece == Pieces.DeuxCentime
            || piece == Pieces.CinqCentime
            || piece == Pieces.DixCentime
            || piece == Pieces.VingtCentime
            ) return false 
        return true;
    }

    public MachineACafe (piece: Pieces, isFonctionnel: boolean): string {
        
        if (!isFonctionnel) return 'Machine casse, va voir ailleurs';

        let output : string = '';

        piece ? output += this.Payer(piece) : 'Il n\'y a pas de piece';
        
        if (!this.Verifier(piece)) {
            return 'la piece n\'est pas valide';
        } else {
            output += 'La piece est supererieur a cinquante centimes';
            output += this.ServirUnCafe();
            output += this.Encaisser();
        }
        return output;
    }

}