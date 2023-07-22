import type { Serving } from "../types";
import Character from "./Character";

class Adviser extends Character {
  serving: Serving;
  line: string = "I don't know why, but I think I gonna die soon";

  constructor(name: string, family: string, age: number, serving: Serving) {
    super(name, family, age);
    this.serving = serving;
  }
}

export default Adviser;
