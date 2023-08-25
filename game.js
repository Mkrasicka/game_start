// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const hands = document.querySelectorAll(".select img");
const playButton = document.querySelector("button.start");
const divRight = document.querySelector("div.panel-right");

const game = {
  playerHand: "",
  aiHand: "",
  winner: ""
};

const gameSummary = {
  gameNumber: 0,
  wins: 0,
  loses: 0,
  draw: 0
};

const handSelection = function(e) {
  game.playerHand = this.dataset.option;

  hands.forEach((hand) => {
    hand.style.boxShadow = ""
  })
  this.style.boxShadow = "0 0 0 4px yellow";
}


hands.forEach((hand) => {
  hand.style.boxShadow = "";
  hand.addEventListener("click", handSelection);
});



function checkResult(playerHand, aiHand) {
  if (playerHand === aiHand) {
    return "Draw"
  } else if (playerHand === "papier" && aiHand === "kamień" || playerHand == "kamień" && aiHand === "nożyczki" || playerHand == "nożyczki" && aiHand === "papier"){
    return "Win"
  } else {
    return "Loss"
  }
};


function publishResult(player, ai, result) {
  const h2 = document.querySelector('span[data-summary ="who-win"]');
  h2.textContent = result;

  const yourChoice = document.querySelector('span[data-summary="your-choice"]');
  yourChoice.innerHTML = player;
  const aiChoice = document.querySelector('span[data-summary="ai-choice"]');
  aiChoice.innerHTML = ai;
  document.querySelector('p.numbers span').textContent = ++gameSummary.gameNumber;

  if (result === "Win") {
    game.winner = "You won"
    h2.style.color = "green";
    document.querySelector('p.wins span').textContent = ++gameSummary.wins
  } else if (result === "Loss") {
    game.winner = "AI won"
    h2.style.color = "red";
    document.querySelector('p.losses span').textContent = ++gameSummary.loses
  } else {
    game.winner = "Remis"
    h2.style.color = "gray";
    document.querySelector('p.draws span').textContent = ++gameSummary.draw
  }
}

const startGame = function() {
if (game.playerHand === "") {
  alert ("Choose hand!")
  return
}
  const options = ["papier", "kamień", "nożyczki"];
  const index = Math.floor(Math.random() * 3);
  game.aiHand = options[index];
  const gameResult = checkResult(game.playerHand, game.aiHand);
  publishResult(game.playerHand, game.aiHand, gameResult);
}

playButton.addEventListener('click', startGame);
