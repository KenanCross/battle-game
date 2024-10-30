"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
const battle_1 = require("./battle");
class Fighter {
    constructor(fighterName, strength, agility, health = 100, energy = 10) {
        this.fighterName = fighterName;
        this.strength = strength;
        this.agility = agility;
        this.health = health;
        this.energy = energy;
    }
    attack(target) {
        if ((0, battle_1.roll20)() > target.agility + (0, battle_1.roll10)()) { //Player roll 20 and checks against target defense rating
            let dmgDealt = (0, battle_1.randomDamage)();
            console.log(`${this.fighterName} attacks ${target.fighterName} and deals ${dmgDealt} damage!`);
            target.receiveDamage(target.health - dmgDealt);
            (0, battle_1.logHealth)(target);
            if ((0, battle_1.isDead)(target.health)) {
                (0, battle_1.logDeath)(this, target);
                process.exit();
            }
        }
        else {
            console.log(`${target.fighterName} dodges an attack from ${this.fighterName}!`);
        }
    }
    receiveDamage(damage) {
        this.health = damage;
    }
    announce() {
        console.log(`Here comes ${this.fighterName}! With a strength level of ${this.strength} & agility of ${this.agility}`);
    }
}
exports.Fighter = Fighter;
