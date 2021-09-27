function solve() {
  let heroesObject = {
    mage(name) {
      return {
        name,
        mana: 100,
        cast(nameOfSpell) {
          this.mana -= 1;
          return console.log(`${this.name} cast ${nameOfSpell}`);
        },
      };
    },
    fighter(name) {
      return {
        name,
        stamina: 100,
        fight() {
          this.stamina -= 1;
          return console.log(`${this.name} slashes at the foe!`);
        },
      };
    },
  };

  return heroesObject;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
