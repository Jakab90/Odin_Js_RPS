let playaScore = 0;
let computuhScore = 0;
const buttons = document.querySelectorAll('input');
let rpsHashy = {
    "rock": ["scissors", "paper"],
    "paper": ["rock", "scissors"],
    "scissors": ["paper", "rock"]
};
function computuhPlays() {
    let keys = Object.keys(rpsHashy);
    return keys[Math.floor((Math.random() * 3))];
}
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
function play(playaPlay) {
    let computuhPlay = computuhPlays();
    let result = "";

    if (computuhPlay == rpsHashy[playaPlay][0]) {
        playaScore += 1;
        result = ('You win! ' + playaPlay + ' beats ' + computuhPlay
            + "<br><br>Player score: " + playaScore + "<br>Computer score: " + computuhScore);
        if (playaScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again';
            disableButtons();
        }
    } else if (computuhPlay == playaPlay) {
        result = ('It\'s a tie. You both chose ' + playaPlay + "<br><br>Player score: " + playaScore + "<br>Computer score: " + computuhScore)
    } else {
        computuhScore += 1
        result = ('You lose! ' + computuhPlay+ ' beats ' + playaPlay
        + "<br><br>Player score: " + playaScore + "<br>Computer score: " + computuhScore)

    if (computuhScore == 5) {
        result += '<br><br>I won the game! Reload the page to play again'
        disableButtons();
    }
}
    document.getElementById('result').innerHTML = result
    return
}
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            play(button.value)
    })
})
