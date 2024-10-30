import { Fighter } from "./fighter";

export const randomDamage = () => Math.floor(Math.random() * 11);

export const chooseOption = (opt1: Fighter, opt2: Fighter): Fighter => {
	let randNum: number = Math.random() >= 0.5 ? 1 : 0;
	return randNum === 0 ? opt1 : opt2;
};
export const roll20 = () => Math.floor(20 * Math.random()) + 1;
export let roll10 = () => Math.floor(10 * Math.random()) + 1;

export const logHealth = (player: Fighter) => {
	console.log(`${player.fighterName} remaining health: ${player.health}`);
};
export const logDeath = (winner: Fighter, loser: Fighter) => {
	console.log(`${winner.fighterName} has defeated ${loser.fighterName}!`);
};
export const isDead = (health: number) => Boolean(health <= 0);

export function fight(player1: Fighter, player2: Fighter) {
	player1.announce();
	player2.announce();
	while (player1.health > 0 || player2.health > 0) {
		const attacker = chooseOption(player1, player2);
		if (attacker === player1) {
			player1.attack(player2);
		} else {
			player2.attack(player1);
		}
	}
}
