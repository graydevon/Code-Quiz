var startButtonEl = document.getElementById("start-btn");
var questionBoxEl = document.getElementById("question-box")
var choiceButtonEl = document.getElementById("choice-btn");
var questionEl = document.getElementById("question");
var timeEl = document.getElementById("time");
var frontPageEl = document.getElementById("front-page");
var currentQuestion = 0;
var choiceBoxEl = document.getElementById("choices");
var timerCount = 60;
var gradeEl = document.getElementById("grade");
var currentScore = 0;
var inputEl = document.getElementById("initials");
var submitBtnEl = document.getElementById("submit-btn");
var scoreEl = document.getElementById("score");



//questions to ask
var questionArrEl = [
    {
      question: "In JavaScript, what is a block of a statement?",
      choices: ["a. block that combines statements into a single compunt statement.", "b. Conditional block", "c. both conditional block and a single statement.", "d. block that contains a single statement."],
      correct: "a. block that combines statements into a single compunt statement.",
    },
    {
      question: "What is the meaning of '===' in JavaScript?",
      choices: ["a. Comparison between two variables being more strict on equality.", "b. Comparison between two variables, but dont have to be exactly the same.", "c. Comparison between 3 variables.", "A way to add two exactly the same variables. "],
      correct: "a. Comparison between two variables being more strict on equality.",
    },
    {
      question: "What is the debugger used for?",
      choices: ["a. To help clean up messy code.", "b. To help find mistakes in your code.", "c. Debugger isnt used in JavaScript.", "d. Used to add more space between code sections."],
      correct: "b. To help find mistakes in your code.",
    },
    {
      question: "Is JavaScript and Java are the same thing?",
      choices: ["Yes, they are the same exact langauge", "Same language that used difference terms", " No, they are completly different programming languages", "They both use the same terms so theyre the same"],
      correct: "No, theyre completly different programming langages"
    }
  ];
  
  // front of the page
var startButtonHandler = function () {
    frontPageEl.className = "hide";
    startTimer();
    startQuiz();
  };
  var timeInterval=0;
  var startTimer = function () {
    timeInterval = setInterval(function () {
      if (timerCount >= 0) {
        timeEl.textContent = timerCount;
        timerCount--;
      } else
        clearInterval(timeInterval);
    }, 1000);
  };
  
  //pulls questions and starts quiz
  var startQuiz = function () {
    renderQuestion(currentQuestion);
    renderChoices(currentQuestion);
  }
  
  //loads the question into the question box
  var renderQuestion = function (currentQuestion) {
    questionEl=document.createElement("h1");
    questionEl.className="question";
    questionEl.textContent= questionArrEl[currentQuestion].question;
    questionBoxEl.appendChild(questionEl);
  };

  //load choice buttons into choices
var renderChoices = function (currentQuestion) {
    for (var i = 0; i < questionArrEl.length; i++) {
      choiceButtonEl = document.createElement("button");
      choiceButtonEl.className = "choice-btn btn";
      choiceButtonEl.textContent= questionArrEl[currentQuestion].choices[i];
      choiceBoxEl.appendChild(choiceButtonEl);
    };
  }
  
  // after first question. moves onto the next question 
  // subtracting time for incorrect choices
  var answerHandler = function (event) {
    var targetEl = event.target;
    var choiceIndex = targetEl.outerText;
    gradeEl = document.createElement("div");
    gradeEl.className = "grade"
    if (choiceIndex !== questionArrEl[currentQuestion].correct) {
        timerCount = timerCount - 10;
    }
    currentQuestion++
    hidePrevious();
    if (currentQuestion < questionArrEl.length) {
      renderQuestion(currentQuestion);
      renderChoices(currentQuestion);
    } else {
      clearInterval(timeInterval);
      currentScore = timerCount;
      timeEl.textContent = currentScore;
      renderCompletePage();
    };
  };

  //display the end page with player score
var renderCompletePage = function(){
    var completedPageEl = document.getElementById("completed");
    completedPageEl.classList.remove("hide");
    scoreEl.textContent = currentScore;
  };
  
  //remove last question and choice boxes
  var hidePrevious = function () {
    while (choiceBoxEl.lastChild) {
      choiceBoxEl.removeChild(choiceBoxEl.lastChild);
    };
    questionBoxEl.removeChild(questionEl);
  };
  
  var scoreStorageArr=[];
  var scoreStorageObj;
  //submit button and stores high score of the quiz
  var endgame = function(){
    retrievedScores = localStorage.getItem("highScores");
    if (retrievedScores !== null){
      retrievedArr = JSON.parse(retrievedScores);
      for(var i=0; i < retrievedArr.length; i++){
        scoreStorageArr.push(retrievedArr[i]);
      }
    }
    scoreStorageObj = {
      initials: inputEl.value,
      score: currentScore,
    };
    scoreStorageArr.push(scoreStorageObj);
   
    localStorage.setItem("highScores", JSON.stringify(scoreStorageArr));
    
  };
  
  startButtonEl.addEventListener("click", startButtonHandler);
  choiceBoxEl.addEventListener("click", answerHandler);
  submitBtnEl.addEventListener("click", endgame);

  