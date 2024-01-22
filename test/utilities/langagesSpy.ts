import { LangagesStub } from "./langagesStub";

export class LanguagesSpy extends LangagesStub {
  private _greetConsulted: boolean = false;

  public Greet(): string {
    this._greetConsulted = true;
    return super.Salutation();
  }

  public GreetHasBeenConsulted() {
    return this._greetConsulted;
  }
}