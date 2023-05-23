// CODE QUIZ //

// // QUERY SELECTORS
// // QUERY SELECTORS
// // QUERY SELECTORS
//
var startButton = document.getElementById("start");
// create variables for 3 HTML sections
var introduction = document.getElementById("introduction");
var quiz = document.getElementById("quiz");
var scoreForm = document.getElementById("score-form");

// // INDECES/VARIABLES
// // INDECES/VARIABLES
// // INDECES/VARIABLES
//

var definitions = [
  {
    question: "DOM is an ackronym for...",
    choices: [
      "Do-Over Machine",
      "Dubious Origami Men",
      "Document Object Model",
      "Taco",
    ],
    answer: "Document Object Model",
  },
  {
    question: "1",
    choices: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "2",
    choices: ["1", "2", "3", "4"],
    answer: "4",
  },
  //   {
  //     question: ,
  //     choices:,
  //     answer:,
  //   }
  //   {
  //     question: ,
  //     choices:,
  //     answer:,
  //   }
];

// console.log(definitions[0].answer);

var syntax = [
  {
    question: "What is the appropriate syntax to denote an array?",
    choices: [
      "Taco",
      "[ARRAY] i.e. Brackets",
      "{ARRAY} i.e. Curly Brackets",
      "(ARRAY) i.e. Parentheses",
    ],
    answer: "[ARRAY] i.e. Brackets",
  },
  //   //   {
  //   //     question: ,
  //   //     choices:,
  //   //     answer:,
  //   //   },
  //   //   {
  //   //     question: ,
  //   //     choices:,
  //   //     answer:,
  //   //   },
  //   //   {
  //   //     question: ,
  //   //     choices:,
  //   //     answer:,
  //   //   },
  //   //   {
  //   //     question: ,
  //   //     choices:,
  //   //     answer:,
  //   //   },
];

var bonus = []; // same syntax as above

var allQuestions = [...definitions, ...syntax, ...bonus];

var questionIndex = 0;

// // FUNCTIONS
// // FUNCTIONS
// // FUNCTIONS
//

function startQuiz(event) {
  event.preventDefault();
  introduction.classList.add("hide");
  quiz.classList.remove("hide");
  selectQuestion();
}

function selectQuestion() {
  var currentQuestion = allQuestions[questionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var btn = document.getElementById(i);
    btn.textContent = choice;
    btn.addEventListener("click", choiceClick);
  }
  //   console.log(currentQuestion);
}

function choiceClick(event) {
  event.preventDefault();
  var choice = event.target.id;
  // check answer (right/wrong); compare choice to answer
  // increase val of q index + 1
  // recall selectQuestion
  console.log(choice);
}

// // COMMANDS
// // COMMANDS
// // COMMANDS
//

// Upon visiting the page, introductory alert
alert(
  "¡Bienvenidos! Ready to test your JavaScript knowledge? Click 'Start Quiz' and see if you can beat the high score!"
);

// // EVENT LISTENERS
// // EVENT LISTENERS
// // EVENT LISTENERS
//

startButton.addEventListener("click", startQuiz);
