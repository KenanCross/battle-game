import { logHealth, logDeath, isDead, randomDamage, roll10, roll20 } from "./battle";
export class Fighter {
	constructor(
		public fighterName: string,
		public strength: number,
		public agility: number,
		public health: number = 100,
		public energy: number = 10
	) {}

	attack(target: Fighter): void {
		if (roll20() > target.agility + roll10()) { //Player roll 20 and checks against target defense rating
			let dmgDealt = randomDamage();
			console.log(
				`${this.fighterName} attacks ${target.fighterName} and deals ${dmgDealt} damage!`
			);
			target.receiveDamage(target.health - dmgDealt);
			logHealth(target);
			if (isDead(target.health)) {
				logDeath(this, target);
				process.exit();
			}
		} else {
			console.log(
				`${target.fighterName} dodges an attack from ${this.fighterName}!`
			);
		}

		
	}

	receiveDamage(damage: number): void {
		this.health = damage;
	}
	announce(): void{
		console.log(`Here comes ${this.fighterName}! With a strength level of ${this.strength} & agility of ${this.agility}`);
	}
}
