export class Character {
  constructor() {
    this.str = 0;
    this.int = 0;
    this.cha = 0;
    this.con = 0;
    this.dex = 0;
    this.wis = 0;
    this.skillPoints = 15;
  }
  addClass(charClass) {
    this.charClass = charClass;
  }
  addRace(race) {
    this.race = race;
  }
  addName(name) {
    this.name = name;
  }
}