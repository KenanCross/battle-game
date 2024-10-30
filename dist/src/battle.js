"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDead = exports.logDeath = exports.logHealth = exports.roll10 = exports.roll20 = exports.chooseOption = exports.randomDamage = void 0;
exports.fight = fight;
const randomDamage = () => Math.floor(Math.random() * 11);
exports.randomDamage = randomDamage;
const chooseOption = (opt1, opt2) => {
    let randNum = Math.random() >= 0.5 ? 1 : 0;
    return randNum === 0 ? opt1 : opt2;
};
exports.chooseOption = chooseOption;
const roll20 = () => Math.floor(20 * Math.random()) + 1;
exports.roll20 = roll20;
let roll10 = () => Math.floor(10 * Math.random()) + 1;
exports.roll10 = roll10;
const logHealth = (player) => {
    console.log(`${player.fighterName} remaining health: ${player.health}`);
};
exports.logHealth = logHealth;
const logDeath = (winner, loser) => {
    console.log(`${winner.fighterName} has defeated ${loser.fighterName}!`);
};
exports.logDeath = logDeath;
const isDead = (health) => Boolean(health <= 0);
exports.isDead = isDead;
function fight(player1, player2) {
    player1.announce();
    player2.announce();
    while (player1.health > 0 || player2.health > 0) {
        const attacker = (0, exports.chooseOption)(player1, player2);
        if (attacker === player1) {
            player1.attack(player2);
        }
        else {
            player2.attack(player1);
        }
    }
}
