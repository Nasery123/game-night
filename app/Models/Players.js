import { generateId } from "../Utils/generateId.js";

export class Player {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.score = data.score
    }
}

function increasingScore(playerName) {
    let foundplayer = players.score
    Player.score++;
  }
  function decreasingScore(playerName) {
    let foundplayer = players.score
    Player.score--;
  }
