let rpsHashy = {
    "rock": ["scissors", "paper"],
    "paper": ["rock", "scissors"],
    "scissors": ["paper", "rock"]
};
let keys = Object.keys(rpsHashy);
let playaPlay = window.prompt("Pick one: rock, paper, scissors");
const computuhPlay = keys[Math.floor((Math.random() * 3))];

function play(computuhPlay, playaPlay) {
    if (computuhPlay === playaPlay)
        return console.log("It's a tie!");
    else if (computuhPlay === rpsHashy[playaPlay][0])
        return console.log("You win!");
    else
        return console.log("Computer wins!");
}
play(computuhPlay, playaPlay);

