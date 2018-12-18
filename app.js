var numberofdecks = 1;
var startingBankroll = 200;
var betPerRound = 25;
var numberOfRounds = 5;
var valueCounter = 0;
var root = document.getElementById("root");


var _deck = new gameDeck();

var _players = [new Player("Spongebob", 50, false),
new Player("Patrick", 50, false),
new Player("You", 50, true),
new Player("Mr.Krabs", 50, false)];

var _dealer = new Dealer();

renderTable(_players, _dealer);

function runGame() {
  var modal=document.getElementById("modal");
  modal.classList.add("clicked");

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
  }).then(function () {
  return prepareForNextRound();
}).then(function () {
  return clearTable();
});
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
