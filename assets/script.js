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
    selections: [
      "Do-Over Machine",
      "Dubious Origami Men",
      "Document Object Model",
      "Taco",
    ],
    answer: 2,
  },
  {
    question: "1",
    selections: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "2",
    selections: ["1", "2", "3", "4"],
    answer: "4",
  },
  //   {
  //     question: ,
  //     selections:,
  //     answer:,
  //   }
  //   {
  //     question: ,
  //     selections:,
  //     answer:,
  //   }
];

var syntax = [
  {
    question: "What is the appropriate syntax to denote an array?",
    selections: [
      "Taco",
      "[ARRAY] i.e. Brackets",
      "{ARRAY} i.e. Curly Brackets",
      "(ARRAY) i.e. Parentheses",
    ],
    answer: "[ARRAY] i.e. Brackets",
    // answer: 1,
  },
  {
    question: "1",
    selections: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "2",
    selections: ["1", "2", "3", "4"],
    answer: "4",
  },
  // {
  //   //     question: ,
  //   //     selections:,
  //   //     answer:,
  //   //   },
  //   //   {
  //   //     question: ,
  //   //     selections:,
  //   //     answer:,
  //   //   },
];

var bonus = [
  {
    question: "0",
    selections: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    question: "1",
    selections: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "2",
    selections: ["1", "2", "3", "4"],
    answer: "4",
  },
  // {
  //   //     question: ,
  //   //     selections:,
  //   //     answer:,
  //   //   },
  //   //   {
  //   //     question: ,
  //   //     selections:,
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

// js function to begin quiz
function selectQuestion() {
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
  // console.log(currentQuestion);
}

// ADD NOTES // ADD NOTES // ADD NOTES //`
// ADD NOTES // ADD NOTES // ADD NOTES //
// ADD NOTES // ADD NOTES // ADD NOTES //
function choiceClick(event) {
  event.preventDefault();
  var choice = event.target.id;
  var answerKey = allQuestions[questionIndex];
  // console.log(choice)
  // console.log(currentQues)
  // console.log(typeof choice); // var choice was a string
  // console.log(typeof currentQuestion.answer); // var currentQuestion.answer was a number
  if (parseInt(choice) === answerKey.answer) {
    // parseInt to convert string to number value; if strictly equal...
    console.log("yayyyyy"); // ~it worked...~
    selectQuestion(questionIndex++);
    // recalls function selectQuestion to bring up the next question in the quiz...
    // ... i.e. presents the following item in allQuestions object array
    // > no time subtracted <
  } else {
    console.log("booooo");
    selectQuestion(questionIndex++);
    // next question
    // TO-DO: subtract 10 seconds
  }
}
//
//
// var answerKey
// to-do: increase val of q index + 1
// to-do: recall selectQuestion

// console.log(choice);

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
