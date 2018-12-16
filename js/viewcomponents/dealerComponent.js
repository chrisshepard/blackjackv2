function dealerComponent(dealer) {
  var dealerComponent = document.createElement("div");
  dealerComponent.id="dealer";

  var dealerRules = document.createElement("div");
  dealerRules.className="dealerRules";
  dealerRules.innerHTML = "Dealer hits soft 17";

  var cardArea = document.createElement("div");
  cardArea.className = "cardArea";
  cardArea.id = "dealerCardArea";

  dealerComponent.appendChild(dealerRules);
  dealerComponent.appendChild(cardArea);

  return dealerComponent;

}