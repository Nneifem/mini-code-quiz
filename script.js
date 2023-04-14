var landingPage = document.querySelector(".quiz-overview");
var questionContainer = document.querySelector("#question-container");
var questionTextEl = document.querySelector("#js-question-text");
var answersList = document.querySelector("#js-question-choices");
var startButton = document.querySelector("#start");
var rightAnswerEl = document.querySelector("#right");
var wrongAnswerEl = document.querySelector("#wrong");
var scoreEl = document.querySelector(".score-display")
var displayScore = document.querySelector(".score-value");
var timerEl = document.querySelector(".timer");
var time = 75;
var timeInterval = 0;

var questionsWithChoices = [
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

var currentQuestionIndex = 0;
var theRightAnswer = questionsWithChoices[currentQuestionIndex].correctAnswer;
scoreEl.classList.add("hide");


function timeQuiz(){
    timerEl.textContent = "Time: " + time;

    timerInterval = setInterval( function(){
    time--;
    timerEl.textContent = "Time: " + time;

    if(time === 0){
        clearInterval(timerInterval);
        endQuiz();
    }
    }, 1000)
}

startButton.addEventListener("click", function(){
    timeQuiz();
    questionTextEl.textContent = questionsWithChoices[currentQuestionIndex].question;
    for (var i = 0; i < questionsWithChoices[currentQuestionIndex].answers.length; i++){
        var currentAnswer = questionsWithChoices[currentQuestionIndex].answers[i];
        var newButton =  document.createElement("button");
        newButton.setAttribute("id", "button" + i);
        newButton.setAttribute("style", "background-color: purple; color: white; display: flex; flex-direction: column; padding: 15px; margin: 9px; padding-left: 15px");
        newButton.textContent = currentAnswer;

        answersList.append(newButton);
    }

    landingPage.classList.add("hide");


    var buttonOne = document.querySelector("#button0");
    buttonOne.addEventListener("click", function(){
        userAnswer = buttonOne.textContent;
        checkAnswer(questionsWithChoices[currentQuestionIndex], buttonOne.textContent)
    
    })
    
    var buttonTwo = document.querySelector("#button1");
    buttonTwo.addEventListener("click", function(){
        userAnswer = buttonTwo.textContent;
        checkAnswer(questionsWithChoices[currentQuestionIndex], buttonTwo.textContent)
    
    })

    var buttonThree = document.querySelector("#button2");
    buttonThree.addEventListener("click", function(){
        userAnswer = buttonThree.textContent;
        checkAnswer(questionsWithChoices[currentQuestionIndex], buttonThree.textContent)
    
    })

    var buttonFour = document.querySelector("#button3");
    buttonFour.addEventListener("click", function(){
        userAnswer = buttonFour.textContent;
        checkAnswer(questionsWithChoices[currentQuestionIndex], buttonFour.textContent)
    })
})

function checkAnswer(theRightAnswer,userAnswer){
    if(userAnswer == theRightAnswer.correctAnswer){
        rightAnswerEl.textContent = "right!";
        nextQuestion();
    }
    else{
        wrongAnswerEl.textContent = "wrong!";

        timerInterval = setInterval( function(){
        time= time - 10;
        clearInterval(timerInterval);
        time--;
        timerEl.textContent = "Time: " + time;
        }, 1000)
        nextQuestion();
    }
}

function nextQuestion(){
    currentQuestionIndex++;
    questionTextEl.textContent = questionsWithChoices[currentQuestionIndex].question;
    var buttonOne = document.querySelector("#button0");
    var buttonTwo = document.querySelector("#button1");
    var buttonThree = document.querySelector("#button2");
    var buttonFour = document.querySelector("#button3");
    buttonOne.textContent = questionsWithChoices[currentQuestionIndex].answers[0];
    buttonTwo.textContent = questionsWithChoices[currentQuestionIndex].answers[1];
    buttonThree.textContent = questionsWithChoices[currentQuestionIndex].answers[2];
    buttonFour.textContent = questionsWithChoices[currentQuestionIndex].answers[3];
    if(questionsWithChoices.length === questionsWithChoices.length){
        endQuiz();
    }
} 

function endQuiz(){
    questionContainer.classList("hide");
    scoreEl.classList.remove("hide");

}