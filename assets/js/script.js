var startButtonEl = document.getElementById("start-btn");
var questionBoxEl = document.getElementById("question-box")
var choiceButtonEl = document.getElementById("picks-btn");
var questionEl = document.getElementById("question");
var timeEl = document.getElementById("time");
var frontPageEl = document.getElementById("front-page");
var currentQuestion = 0;
var choiceBoxEl = document.getElementById("picks");
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
      correct: "Answer: A",
    },
    {
      question: "What is the meaning of '===' in JavaScript?",
      choices: ["a. Comparison between two variables being more strict on equality.", "b. Comparison between two variables, but dont have to be exactly the same.", "c. Comparison between 3 variables.", "A way to add two exactly the same variables. "],
      correct: "Answer: A",
    },
    {
      question: "What is the debugger used for?",
      choices: ["a. To help clean up messy code.", "b. To help find mistakes in your code.", "c. Debugger isnt used in JavaScript.", "d. Used to add more space between code sections."],
      correct: "Answer: B",
    },
    {
      question: "Is it True JavaScript and Java are the same thing?",
      choices: ["True", "False"],
      correct: "Answer: False"
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