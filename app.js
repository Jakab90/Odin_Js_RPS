let rpsHashy = {
    "rock": ["scissors", "paper"],
    "paper": ["rock", "scissors"],
    "scissors": ["paper", "rock"]
};

let keys = Object.keys(rpsHashy);
const computuhPlay = computerPlay();
let playaPlay = "scissors";

function computerPlay(){
    let randomPick = keys[Math.floor((Math.random() * 3))];
        return randomPick;
}




function play(computuhPlay, playaPlay){
    if (computuhPlay === playaPlay) {
         return console.log("It's a tie!");
    }
    if (computuhPlay === rpsHashy[playaPlay][0]){
         return console.log("You win!");
    }
    if (computuhPlay === rpsHashy[playaPlay][1]){
            return console.log("Computer wins!");
    }
}
play(computuhPlay, playaPlay);

console.log(computuhPlay)

