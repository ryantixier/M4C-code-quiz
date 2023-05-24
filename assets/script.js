// CODE QUIZ //

// // QUERY SELECTORS
// // QUERY SELECTORS
// // QUERY SELECTORS
//

// NOTE: variable bound to the event listener used to begin running the quiz
var startButton = document.getElementById("start");

// NOTE: variables for each of the 3 HTML sections
var introduction = document.getElementById("introduction");
var quiz = document.getElementById("quiz");
var scoreForm = document.getElementById("score-form");

// // INDECES/VARIABLES
// // INDECES/VARIABLES
// // INDECES/VARIABLES
//

// NOTE: quiz questions comprise of "definitions" questions, "syntax" questions, and "bonus" questions
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
  // {
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

var bonus = [
  {
    question: "0",
    choices: ["1", "2", "3", "4"],
    answer: "3",
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
  // {
  //   //     question: ,
  //   //     choices:,
  //   //     answer:,
  //   //   },
  //   //   {
  //   //     question: ,
  //   //     choices:,
  //   //     answer:,
]; // same syntax as above

// NOTE: question categories merged into a single variable
var allQuestions = [...definitions, ...syntax, ...bonus];

// NOTE: sets the starting point of the each question catergory to the 0 index
// ... : to be used for iteration through var allQuestions during quiz
var questionIndex = 0;

// // FUNCTIONS
// // FUNCTIONS
// // FUNCTIONS
//

// NOTE: function will run upon click (event)
function startQuiz(event) {
  event.preventDefault();
  introduction.classList.add("hide");
  // ... : will hide HTML introductory section
  quiz.classList.remove("hide");
  // ... : will reveal HTML quiz section
  selectQuestion();
  // ... : triggers the JS function to run the quiz
}

// ADD NOTES // ADD NOTES // ADD NOTES //
// ADD NOTES // ADD NOTES // ADD NOTES //
// ADD NOTES // ADD NOTES // ADD NOTES //
function selectQuestion() {
  var currentQuestion = allQuestions[questionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var btn = document.getElementById(i);
    btn.textContent = choice;
    btn.addEventListener("click", choiceClick);
  }
  // console.log(currentQuestion);
}

// ADD NOTES // ADD NOTES // ADD NOTES //`
// ADD NOTES // ADD NOTES // ADD NOTES //
// ADD NOTES // ADD NOTES // ADD NOTES //
function choiceClick(event) {
  event.preventDefault();
  var choice = event.target.id;

  // to-do: check answer (right/wrong); compare choice to answer
  // to-do: increase val of q index + 1
  // to-do: recall selectQuestion

  // console.log(choice);
}

// // COMMANDS
// // COMMANDS
// // COMMANDS
//

// NOTE: introductory alert; displays upon visiting the page
alert(
  "¡Bienvenidos! Ready to test your JavaScript knowledge? Click 'Start Quiz' and see if you can beat the high score!"
);

// // EVENT LISTENERS
// // EVENT LISTENERS
// // EVENT LISTENERS
//

// NOTE: connects JS code to the HTML start button; triggers the function to begin the quiz
startButton.addEventListener("click", startQuiz);
