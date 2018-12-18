var numberofdecks = 1;
var startingBankroll = 200;
var betPerRound = 25;
var numberOfRounds = 5;
var valueCounter = 0;
var root = document.getElementById("root");


var _deck = new gameDeck();

var _players = [new Player("Spongebob", 50, false),
new Player("Patrick", 50, false),
new Player("Sandy", 50, false),
new Player("Mr.Krabs", 50, false)];

var _dealer = new Dealer();

function turnSequence(players) {
  players.forEach(player => {
    for (handNum = 0; handNum < player.hands.length; handNum++) {
      console.log("It is " + player.name + "'s turn.");
      if (player.activePlayer === true) {
        player.computerDecision(handNum);
      };
    };
  })
};

/*  -------------------------------------------------------------------instant simulation
function roundSequence() {
  _dealer.requestBets(_players);
  _dealer.dealCards(_players);
  turnSequence(_players);
  _dealer.turnDecision();
  _dealer.evaluateResults(_players);
};
roundSequence();
*/




renderTable(_players, _dealer);

requestBets().then(function () {
  return showBets();
}).then(function () {
  return dealCards();
}).then(function () {
  return showDealing();
}).then(function () {
  return playerTurns();
}).then(function () {
  return showTurns();
}).then(function () {
  return dealerTurn();
}).then(function () {
  return showDealerTurn();
}).then(function () {
  return checkResults();
}).then(function () {
  return showResults();
})/*.then(function () {
  return prepareForNextRound();
}).then(function () {
  return clearTable();
});*/

/*

var div = document.createElement("div");
div.className="hand";
div.appendChild(cardComponent(1,2,10,"Hearts", "card0"));
div.appendChild(cardComponent(1,2,"A","Spades","card1"));
div.appendChild(cardComponent(1,2,2,"Diamonds","card2"));
div.appendChild(cardComponent(1,2,6,"Clubs","card3"));


root.appendChild(div);
root.appendChild(handComponent(_players[0], 2));
*/