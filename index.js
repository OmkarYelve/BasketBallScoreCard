let homeScore = 0;
let guestScore = 0;

function updateScore(team, points) {
  if (team === "home") {
    homeScore += points;
    document.getElementById("homeScore").textContent = homeScore;
  } else {
    guestScore += points;
    document.getElementById("guestScore").textContent = guestScore;
  }
}

function resetScore(team) {
  if (team === "home") {
    homeScore = 0;
    document.getElementById("homeScore").textContent = homeScore;
  } else {
    guestScore = 0;
    document.getElementById("guestScore").textContent = guestScore;
  }
}
