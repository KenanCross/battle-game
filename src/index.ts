import { fight, roll10 } from "./battle";
import { Fighter } from "./fighter";

let fighters: Fighter[] = [
	new Fighter('Batman', roll10(), roll10()),
	new Fighter('The Flash', roll10(), roll10()),
	new Fighter('Wonder Woman', roll10(), roll10()),
	new Fighter('Spider-Man', roll10(), roll10()),
	new Fighter('Captain America', roll10(), roll10()),
	new Fighter('Wolverine', roll10(), roll10())
]
fight(
	fighters[Math.floor(fighters.length * Math.random())],
	fighters[Math.floor(fighters.length * Math.random())]
);
