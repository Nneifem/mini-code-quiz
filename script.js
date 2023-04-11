var landingPage = document.querySelector(".quiz-overview");
var questionContainer = document.querySelector("#question-container");
var questionTextEl = document.querySelector("#js-question-text");
var answersList = document.querySelector("#js-question-choices");
var startButton = document.querySelector("#start");

var questionsWithChoices = [
    {
        question: "How are arrays determined?",
        answers: ["Parenthesis ()", "Curly Bracket {}", "Bracket []", "None of the above"],
        correctAnswer: "Bracket []"
    },

    {
        question: "What defines a class and what defines a id",
        answers: ["class: # , id: .", "class: . , id: +", "class () , id: #", "class: . , id: #"],
        correctAnswer: "class: . , id: #"
    }
]
var currentQuestionIndex = 0;

startButton.addEventListener("click", function(){
    // TODO: seperate lines 24-33 into a function

    questionTextEl.textContent = questionsWithChoices[currentQuestionIndex].question;
    for (var i = 0; i < questionsWithChoices[currentQuestionIndex].answers.length; i++){
        var currentAnswer = questionsWithChoices[currentQuestionIndex].answers[i];
        var newButton =  document.createElement("button");
        newButton.textContent = currentAnswer;

        // TODO: add click event listener to newButton that checks if answer is correct

        answersList.append(newButton)
    }

    landingPage.classList.add("hide");
})