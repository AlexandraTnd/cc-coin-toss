let message = document.getElementById("message");
let picture = document.getElementById("head_or_tails");

let randomCoinSide = Math.ceil(Math.random() * 2);
if (randomCoinSide === 1) {
    message.innerHTML = "You have chosen tails";
    picture.src = "coin-tails.png";
} else if (randomCoinSide === 2) {
    message.innerHTML = "You have chosen heads";
    picture.src = "coin-heads.png"
}