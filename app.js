

let rps = ["rock", "paper", "scissors"];

let rps_hashy = {
    "rock": ["scissors", "paper"],
    "paper": ["rock", "scissors"],
    "scissors": ["paper", "rock"]
};

const computuhPlay = computerPlay();
let playaPlay = "scissors";

function computerPlay(){
    let randomPick = rps[Math.floor((Math.random() * 3))];
        return randomPick;
}




function play(computuhPlay, playaPlay){
    if (computuhPlay === playaPlay) {
         return console.log("It's a tie!");
    }
    if (computuhPlay === rps_hashy[playaPlay][0]){
         return console.log("You win!");
    }
    if (computuhPlay === rps_hashy[playaPlay][1]){
            return console.log("Computer wins!");
    }
}
play(computuhPlay, playaPlay);

console.log(computuhPlay)

