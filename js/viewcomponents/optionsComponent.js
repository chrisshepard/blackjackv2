function optionsComponent(player, position) {
    var hidden = true;
    var splitHidden = true;

    if (player.isHuman === true) {
        hidden = false;
    }
    // "this" refers to this function not the player 
    // handPos is undefined
    if (this.hands[handPos][0].value === this.hands[handPos][1].value && this.hands[handPos].length === 2) {
        splitHidden = false;
    }
    if (hidden === true) {
        document.getElementById("playerButton1").style.visibility = "hidden";
        document.getElementById("playerButton2").style.visibility = "hidden";
        document.getElementById("playerButton3").style.visibility = "hidden";
        document.getElementById("playerButton4").style.visibility = "hidden";
    } else if (hidden === false && splitHidden === false) {
        document.getElementById("playerButton4").style.visibility = "visible";
    } else {
        document.getElementById("playerButton1").style.visibility = "visible";
        document.getElementById("playerButton2").style.visibility = "visible";
        document.getElementById("playerButton3").style.visibility = "visible";
    }
                                                                    //Player is undefined
                                                                    //also index.html wont know which player is being selected
    document.getElementById("playerButton1").onclick = function () { Player.hit(handPos) };
    document.getElementById("playerButton2").onclick = function () { Player.doubleDown(handPos) };
    document.getElementById("playerButton3").onclick = function () { Player.stay(handPos) };  //.stay is not a function
    document.getElementById("playerButton4").onclick = function () { Player.split(handPos) };
}

//                                **Below** 
// makes the optionComponent which makes it render only when necessary
// optionsComponent removes itself when you chose "Stay" which makes the visibility feature above obsolete 
// if statement will only make split button if the player is able to split
// buttons don't need id's because the onclick function is attached to the element itself


/*

function optionsComponent(player, handPos) {
    var playersPos = _players.map(function (e) { return e.name; }).indexOf(player.name);
    var thisOptions = document.getElementById("options"+playersPos);
    var optionsComponent = document.createElement("div");
    optionsComponent.id= "options"+playersPos;

    var hitOption = document.createElement("button");
    hitOption.innerHTMl = "Hit";
    hitOption.onclick = _players[playersPos].splitHand(handPos);

    var ddOption = document.createElement("button");
    ddOption.innerHTML = "Double Down";
    ddOption.onclick = _players[playersPos].splitHand(handpos);

    var stayOption = document.createElement("button");
    stayOption.innerHTML = "Stay";
    stayOption.onclick = thisOptions.parentNode.removeChild(thisOptions);

    optionsComponent.appendChild(hitOption);
    optionsComponent.appendChild(ddOption);
    optionsComponent.appendChild(stayOption);
    
    if (player.hands[handPos][0].value === player.hands[handPos][1].value) {
        var splitOption = document.createElement("button");
        splitOption.innerHTML = "Split";
        split.onclick = _players[playersPos].splitHand(handPos);
        
        optionsComponent.appendChild(splitOption);
    };

    return optionsComponent;
}

*/