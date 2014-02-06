var playerScore = 0;
var botScore = 0;
var playerThrow;
var botThrow;

function getRobotsThrow() {
  //console.log('RobotsThrowing');
  var botThrowNumber = Math.floor(Math.random() * 3);
  if (botThrowNumber == 0) {
    botThrow = 'rock';
  } else if (botThrowNumber == 1) {
    botThrow = 'paper';
  } else {
    botThrow = 'scissors';
  }
}

function throwRock() {
  //console.log('rock clicked');
  playerThrow = 'rock';
  getRobotsThrow();
  getGameOutcome(playerThrow, botThrow);
  updateScore();
}

function throwPaper() {
  //console.log('paper clicked');
  playerThrow = 'paper';
  getRobotsThrow();
  getGameOutcome(playerThrow, botThrow);
  updateScore();
}

function throwScissors() {
  //console.log('scissors clicked');
  playerThrow = 'scissors';
  getRobotsThrow();
  getGameOutcome(playerThrow, botThrow);
  updateScore();
}

function getGameOutcome(var1, var2) {
  //console.log('GetOutcome working');
  if (var1 == var2) {
    playerScore = playerScore + 0; 
    botScore = botScore + 0;
    reportThrows();
    document.getElementById('whowins').innerHTML = "You tied. :|";
  } else if ((var1 == 'rock' && var2 == 'paper') || (var1 == 'paper' && var2 == 'scissors') || (var1 == 'scissors' && var2 == 'rock')) {
    botScore = botScore + 1;
    reportThrows();
    document.getElementById('whowins').innerHTML = "You lose. :(";
  } else if ((playerThrow == 'rock' && botThrow == 'scissors') || (playerThrow == 'paper' && botThrow == 'rock') || (playerThrow == 'scissors' && botThrow == 'paper')) {
    playerScore = playerScore + 1;
    reportThrows();
    document.getElementById('whowins').innerHTML = "You Win! :)";
  }
}

function reportThrows() {
document.getElementById('teaser').innerHTML = "You played " + "<strong>" + playerThrow + "</strong>" + ". The bot played " + "<strong>" + botThrow + "</strong>" + ".";
}

function updateScore() {
document.getElementById('humanScore').innerHTML = playerScore;
document.getElementById('computerScore').innerHTML = botScore;
}

document.getElementById('rock').onclick = throwRock;
document.getElementById('paper').onclick = throwPaper;
document.getElementById('scissors').onclick = throwScissors;

