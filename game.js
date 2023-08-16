// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const hands =[... document.querySelectorAll('.select img')];
const btn = document.querySelector('button');
const panelRight = [...document.querySelectorAll('.panel-right p')]
const panelLeft = [...document.querySelectorAll('.panel-left p')]


const gameSummary = {
  number: 0,
  wins: 0,
  losses: 0,
  draws: 0
}

const game = {
  playerHand: "",
  aiHand: ""
}



// Funtion 1
function handSelection(e) {
  // console.log(this.dataset);
  game.playerHand = this.dataset.option;
  hands.forEach((hand) => hand.style.boxShadow = "");
  this.style.boxShadow = "0 0 0 4px red";

};

function aiChoice() {
  return hands[Math.floor(Math.random() * hands.length)].dataset.option;
}

function checkResult(player, ai) {
  if (player === ai) {
    alert("remis!");

    return "draw"
  } else if (player === "papier" && ai === "kamień" || player === "kamień" && ai === "nożyczki" || player === "nożyczki" && ai === "papier") {
    alert("Wygrales!");

    return "win"
  } else {
    alert("Przegrales!");

    return "loss"
  }
}

function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;

  document.querySelector('[data-summary="ai-choice"]').textContent = ai;

  document.querySelector('p.numbers span').textContent = ++gameSummary.number;

  if (result === "win") {

    document.querySelector('p.wins span').textContent = ++gameSummary.wins
    document.querySelector('[data-summary= "who-win"]').textContent = "You!"
    document.querySelector('[data-summary= "who-win"]').style.color = "green"

  } else if (result === "loss") {

    document.querySelector('[data-summary= "who-win"]').textContent = "AI!"
    document.querySelector('p.losses span').textContent = ++gameSummary.losses
    document.querySelector('[data-summary= "who-win"]').style.color = "red"

  } else {

    document.querySelector('[data-summary= "who-win"]').textContent = "Remis!"
    document.querySelector('p.draws span').textContent = ++gameSummary.draws;
    document.querySelector('[data-summary= "who-win"]').style.color = "gray"

  }
}

function endGame() {


  document.querySelector(`[data-option= "${game.playerHand}"]`).style.boxShadow = "";

  game.playerHand = "";
  game.aiHand = "";
}

// Function 2
function letsPlay(e) {
  if (!game.playerHand) {
    return alert("Choose hand!");
  }

  game.aiHand = aiChoice();

  const gameResult = checkResult(game.playerHand, game.aiHand);

  publishResult(game.playerHand, game.aiHand, gameResult);

  endGame();
  // update twoj wybor
  // update wybor komputera
  // zwyciezca gry


}



hands.forEach((hand) => {
  hand.addEventListener("click", handSelection)
});

btn.addEventListener('click', letsPlay);






// const handSelection = (e) => {
//   // this odnosi sie do obiektu globalnego window
//   // console.log(this);

//   // all below is the same
//   // console.log(e.currentTarget);
//   // console.log(e.target);
// }
