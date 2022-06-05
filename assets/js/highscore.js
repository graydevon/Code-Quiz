var backButtonEl = document.getElementById("back-btn");
var clearButtonEl = document.getElementById("clear-btn");
var storedScoreEl = document.getElementById("stored-score");
var highScorePageEl = document.getElementById("high-score-page");
var highScoreEl = document.getElementById("high-score");
var scoreListEl = document.getElementById("score-list");
var scoreEl = document.getElementById("score");

var retrievedScores = localStorage.getItem("highScores");
var score1 = JSON.parse(retrievedScores);


var viewHighScores = function () {
  if (retrievedScores != null){
    
    for (var i = 0; i < score1.length; i++) {
      var newScore = document.createElement("li");
      newScore.textContent = score1[i].initials + "  " + score1[i].score;
      scoreListEl.appendChild(newScore);
    }
  }
  // displays high score 
};
viewHighScores();


var goBack = function () {
  location.href= "./index.html";
}
var clearScores = function () {
  localStorage.clear();
  while(scoreListEl.lastChild){
    scoreListEl.removeChild(scoreListEl.lastChild);
  };
}


backButtonEl.addEventListener("click", goBack);
clearButtonEl.addEventListener("click", clearScores);