import { appState } from "../AppState.js";
import { Player } from "../Models/Players.js";




function drawPlayers() {
    let template = ''
    appState.players.forEach(p => {
        template += `
        <div>
        ${Player.name} _  '${Player.score}'
        <div>
          <button
            class="btn btn-success"
            onclick="app.playersController.increasingScore(playerName)" </button>
            <span> + </span>
            </div>
            <div>
            <span>0</span>
            </div>
            <div>
            <button class="btn btn-primary"
            onclick = "app.playerController.decreasingScore(playerName)"</button>
            <span> - </span>
        </div>
      </div>`
    })
    document.getElementById('play').innerHTML = template;

}

export class PlayersController {
    constructor() {
        console.log('Hello from Players Controller.');
        drawPlayers()
    }

    p1() {
        console.log('player one scores more')
    }

    p2(playerName) {
        console.log('this is the last player.', playerName)
    }


}
let aman = new Player("123ewqr", "aman", 33);
