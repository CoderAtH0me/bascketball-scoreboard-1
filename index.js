let homeScore = 0;
document.getElementById("actual-home-score").textContent = homeScore;
let guestScore = 0;
document.getElementById("actual-guest-score").textContent = guestScore;
function home1 () {
    homeScore += 1;
    document.getElementById("actual-home-score").textContent = homeScore;
}
function home2 () {
    homeScore += 2;
    document.getElementById("actual-home-score").textContent = homeScore;
}
function home3 () {
    homeScore += 3;
    document.getElementById("actual-home-score").textContent = homeScore;
}
function guest1 () {
    guestScore += 1;
    document.getElementById("actual-guest-score").textContent = guestScore;
}
function guest2 () {
    guestScore += 2;
    document.getElementById("actual-guest-score").textContent = guestScore;
}
function guest3 () {
    guestScore += 3;
    document.getElementById("actual-guest-score").textContent = guestScore;
}
function reset () {
    homeScore = 0;
    guestScore = 0;
    document.getElementById("actual-guest-score").textContent = guestScore;
    document.getElementById("actual-home-score").textContent = homeScore;
}