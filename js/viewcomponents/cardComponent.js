function cardComponent(position, handPos, cardValue, cardSuit, cardID) {
    var card = document.createElement("div");
 
    card.className = "card"+" card"+cardID;
    if (cardID === "d0") {
        card.classList.add("facedown");
    }



    var value = document.createElement("div");
    value.className = "value";
    value.id = ("value" + position + handPos);
    value.innerHTML = cardValue;

    var suitSRC = cardSuit;
    var suit = document.createElement("img");
    suit.src = ("./0-media/"+suitSRC + ".png");
    suit.className = "suit";

    card.appendChild(value);
    card.appendChild(suit);

    return card;
}