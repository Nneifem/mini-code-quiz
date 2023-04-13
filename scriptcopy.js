var titlePage = document.querySelector(".quiz-overview");
var timerEl = document.querySelector(".timer");
var startButton = document.querySelector("#start");
var questionContainer = document.querySelector("#question-container");
var questionsEl = document.querySelector("#question-text");
var answersEl = document.querySelector("question-choices");
var finalScore = document.querySelector("#score-display");
var scoreNumberEl = document.querySelector(".score-value");
var time = 100;
var timeInterval = 0;

var questionsAnswersList = [
    {
        question: "How are arrays determined?",
        answers: ["Parenthesis ()", "Curly Bracket {}", "Bracket []", "None of the above"],
        correctAnswer: "Bracket []"
    },

    {
        question: "What defines a class and what defines a id?",
        answers: ["class: # , id: .", "class: . , id: +", "class () , id: #", "class: . , id: #"],
        correctAnswer: "class: . , id: #"
    },

    {
        question: "What type of values does arrays NOT hold?",
        answers: ["booleans", "strings", "number", "functions"],
        correctAnswer: "functions"
    },

    {
        question: "What makes your webpage interative?",
        answers: ["JavaScript", "HTML", "CSS", "Prompts"],
        correctAnswer: "JavaScript"
    },

    {
        question: "What does display:block do?",
        answers: ["Doesn't start a new line", "Always starts a new line", "Doesn't display element", "Starts from the right side of page"],
        correctAnswer: "Always starts a new line"
    }
]

startButton.addEventListener("click", function(){
    timerInterval = setInterval( function(){
    time--;
    timerEl.textContent = "Time: " + time;
    }, 1000)
    console.log("click me")
})