import { Pieces } from "./pieces";

export interface Pay {

    Payer(piece : Pieces): string;

    Rembourser (): string;

    ServirUnCafe(): string;

    Encaisser(): string;
}