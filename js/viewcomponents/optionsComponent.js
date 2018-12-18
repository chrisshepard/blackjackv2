function optionsComponent(player, position) {
    var hidden = true;
    var splitHidden = true;

    if (player.isHuman === true) {
        hidden = false;
    }
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

    document.getElementById("playerButton1").onclick = function () { Player.hit(handPos) };
    document.getElementById("playerButton2").onclick = function () { Player.doubleDown(handPos) };
    document.getElementById("playerButton3").onclick = function () { Player.stay(handPos) };
    document.getElementById("playerButton4").onclick = function () { Player.split(handPos) };
}