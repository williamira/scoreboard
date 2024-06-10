let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeTotal = 0;
let guestTotal = 0;

function add1Home() {
    homeTotal += 1;
    homeScore.textContent = homeTotal;
}
function add2Home() {
    homeTotal += 2;
    homeScore.textContent = homeTotal;
}
function add3Home() {
    homeTotal += 3;
    homeScore.textContent = homeTotal;
}

function add1Guest() {
    guestTotal += 1;
    guestScore.textContent = guestTotal;
}
function add2Guest() {
    guestTotal += 2;
    guestScore.textContent = guestTotal;
}
function add3Guest() {
    guestTotal += 3;
    guestScore.textContent = guestTotal;
}

function newGame() {
    homeTotal = 0;
    guestTotal = 0;
    homeScore.textContent = homeTotal;
    guestScore.textContent = guestTotal;
}