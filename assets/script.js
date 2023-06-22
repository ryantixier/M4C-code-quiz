// CODE QUIZ //

//
//
// // QUERY SELECTORS
// // QUERY SELECTORS
// // QUERY SELECTORS

// variable bound to the event listener used to begin running the quiz
var startButton = document.getElementById("start");

// variables for each of the 3 HTML sections
var introduction = document.getElementById("introduction");
var quiz = document.getElementById("quiz");
var scoreForm = document.getElementById("score-form");
var scoreTimer = document.getElementById("score");
var userInfo = document.getElementById("user-info");
var userScore = document.getElementById("user-score");
var submitButton = document.getElementById("submit-score");

//
//
// // INDECES/VARIABLES
// // INDECES/VARIABLES
// // INDECES/VARIABLES

var score = 100;

// quiz questions comprise of "definitions" questions, "syntax" questions, and "bonus" questions
var definitions = [
  {
    question: "DOM is an ackronym for...",
    selections: [
      "Do-Over Machine",
      "Dubious Origami Men",
      "Document Object Model",
      "Taco",
    ],
    answer: 2,
  },
  {
    question: "Which method(s) can be used to combine multiple arrays?",
    selections: [
      "The merge method i.e. [... array1, ...array2, ...array3]",
      "The concatenation method i.e. .concat(array1, array2, array3)",
      "Taco i.e. .taco()",
      "The first two choices are correct; 'Taco' does nothing but bring joy to people in real life",
    ],
    answer: 3,
  },
  {
    question: "A string can be utilized to represent which kind of data?",
    selections: [
      "An integer, without quotes",
      "A line of text",
      "A boolean value",
      "Taco(s) value i.e. priceless",
    ],
    answer: 1,
  },
  {
    question: "Which datatype returns values of true/false?",
    selections: ["Boolean", "Number", "String", "Le taco"],
    answer: 0,
  },
];

var syntax = [
  {
    question: "What is the appropriate syntax to denote an array?",
    selections: [
      "'taco' ie. 'taco'",
      "[ARRAY] i.e. Brackets",
      "{ARRAY} i.e. Curly Brackets",
      "(ARRAY) i.e. Parentheses",
    ],
    answer: 1,
    // answer: 1,
  },
  {
    question:
      "A line of completed code must be followed by which character to denote the line's end?",
    selections: [
      ", i.e. comma",
      "; i.e. semicolon",
      "! i.e. exclamation point",
      "'taco' ie. 'taco'",
    ],
    answer: 1,
  },
  {
    question:
      "When referencing an index position, the index will always start at which number?",
    selections: ["0", "1", "2", "Taco"],
    answer: 0,
  },
  {
    question:
      "The code line... var newVariable = ''; ...will create a new variable with the value of...",
    selections: ["Numbers 1-9", "The alphabet", "Taco!", "An empty string"],
    answer: 3,
  },
];

var bonus = [
  {
    question: "Taco.",
    selections: [
      "Taco",
      "Taco, duh.",
      "Taco, okay?",
      "All of the [tacos] above",
    ],
    answer: 3,
  },
];

// question categories merged into a single variable
var allQuestions = [...definitions, ...syntax, ...bonus];

// sets the starting point of the each question catergory to the 0 index
// ... to be used for iteration through var allQuestions during quiz
var questionIndex = 0;

var timerInterval;

//
//
// // FUNCTIONS
// // FUNCTIONS
// // FUNCTIONS

function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    score--;
    scoreTimer.textContent = score;

    if (score <= 0) {
      gameOver();
      // Stops execution of action at set interval
    }
  }, 1000); // specifies interval; 1000 ms / 1 sec
}

// function will run upon click (event)
function startQuiz(event) {
  event.preventDefault();
  introduction.classList.add("hide");
  // ... : will hide HTML introductory section
  quiz.classList.remove("hide");
  // ... : will reveal HTML quiz section
  setTime();
  selectQuestion();
  // ... : triggers the JS function to run the quiz
}

// js function to begin quiz
function selectQuestion() {
  scoreTimer.textContent = score;
  var currentQuestion = allQuestions[questionIndex];
  // will display a given question on the page
  document.getElementById("question").textContent = currentQuestion.question;
  // ties html question id to display text of
  for (let i = 0; i < currentQuestion.selections.length; i++) {
    // iterates through items in 'selections'
    var choice = currentQuestion.selections[i];
    // creates variable 'choice' to separate each individual item in the array
    var btn = document.getElementById(i);
    btn.textContent = choice;
    btn.addEventListener("click", choiceClick);
  }
}

// function to compare answer to choice, to move to next question, and to subtract time from score in the event of incorrect answer
function choiceClick(event) {
  event.preventDefault();
  var choice = event.target.id;
  var answerKey = allQuestions[questionIndex].answer;
  if (parseInt(choice) === answerKey) {
    // parseInt to convert string to number value; if strictly equal...
    // console.log("yayyyyy"); // ~it worked...~
    // recalls function selectQuestion to bring up the next question in the quiz...
    // ... i.e. presents the following item in allQuestions object array
  } else {
    // console.log("booooo"); // ~it worked...~
    score -= 10;
  }
  questionIndex++;
  // will run gameOver() function if score <= 0 or if all questions have been answered
  if (score <= 0 || questionIndex >= allQuestions.length) {
    gameOver();
  } else {
    selectQuestion(questionIndex);
  }
}

//
function gameOver() {
  clearInterval(timerInterval);
  quiz.classList.add("hide");
  scoreForm.classList.remove("hide");
  // highscores user information form appears to record score
  // hides quiz
  userScore.textContent = score;
}

function handleScoreSubmit(event) {
  event.preventDefault();
  var userInitials = userInfo.value;
  // console.log(userInitials);
  var scoresArray = localStorage.getItem("scores");
  if (scoresArray) {
    scoresArray = JSON.parse(scoresArray);
  } else {
    scoresArray = [];
  }
  scoresArray.push({
    userInitials,
    score,
  });
  localStorage.setItem("scores", JSON.stringify(scoresArray));

  // navigate to highscores.html
  location.href = "./highscores.html";
}

//
//
// // EVENT LISTENERS
// // EVENT LISTENERS
// // EVENT LISTENERS

// NOTE: connects JS code to the HTML start button; triggers the function to begin the quiz
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", handleScoreSubmit);
