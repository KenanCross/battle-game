"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const battle_1 = require("./battle");
const fighter_1 = require("./fighter");
let fighters = [
    new fighter_1.Fighter('Batman', (0, battle_1.roll10)(), (0, battle_1.roll10)()),
    new fighter_1.Fighter('The Flash', (0, battle_1.roll10)(), (0, battle_1.roll10)()),
    new fighter_1.Fighter('Wonder Woman', (0, battle_1.roll10)(), (0, battle_1.roll10)()),
    new fighter_1.Fighter('Spider-Man', (0, battle_1.roll10)(), (0, battle_1.roll10)()),
    new fighter_1.Fighter('Captain America', (0, battle_1.roll10)(), (0, battle_1.roll10)()),
    new fighter_1.Fighter('Wolverine', (0, battle_1.roll10)(), (0, battle_1.roll10)())
];
(0, battle_1.fight)(fighters[Math.floor(fighters.length * Math.random())], fighters[Math.floor(fighters.length * Math.random())]);
