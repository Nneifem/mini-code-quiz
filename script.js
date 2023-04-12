var landingPage = document.querySelector(".quiz-overview");
var questionContainer = document.querySelector("#question-container");
var questionTextEl = document.querySelector("#js-question-text");
var answersList = document.querySelector("#js-question-choices");
var startButton = document.querySelector("#start");
var rightAnswerEl = document.querySelector("#right");
var wrongAnswerEl = document.querySelector("#wrong");

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
var theRightAnswer = questionsWithChoices[currentQuestionIndex].correctAnswer;


startButton.addEventListener("click", function(){
    function theQuestions(){  
    questionTextEl.textContent = questionsWithChoices[currentQuestionIndex].question;
    for (var i = 0; i < questionsWithChoices[currentQuestionIndex].answers.length; i++){
        var currentAnswer = questionsWithChoices[currentQuestionIndex].answers[i];
        var newButton =  document.createElement("button");
        newButton.setAttribute("id", "button" + i)
        newButton.textContent = currentAnswer;

        answersList.append(newButton)
    }
}
    var buttonOne = document.querySelector("#button0");
    buttonOne.addEventListener("click", function(){
        console.log(buttonOne.textContent);
        checkAnswer(questionsWithChoices[currentQuestionIndex], buttonOne.textContent)
    })

    var buttonTwo = document.querySelector("#button1");
    buttonTwo.addEventListener("click", function(){
        console.log(buttonTwo.textContent);
        checkAnswer(questionsWithChoices[currentQuestionIndex], buttonTwo.textContent)
    
    })
    landingPage.classList.add("hide");

    var buttonThree = document.querySelector("#button2");
    buttonThree.addEventListener("click", function(){
        console.log(buttonThree.textContent);
        checkAnswer(questionsWithChoices[currentQuestionIndex], buttonThree.textContent)
    
    })

    var buttonFour = document.querySelector("#button3");
    buttonFour.addEventListener("click", function(){
        console.log(buttonFour.textContent);
        checkAnswer(questionsWithChoices[currentQuestionIndex], buttonFour.textContent)
    })
})

function checkAnswer(theRightAnswer,userAnswer){
    if(userAnswer == theRightAnswer.correctAnswer){
        console.log("right")
    }
    else{
        console.log("wrong")
    }
}
currentQuestionIndex++;
checkAnswer(theRightAnswer,userAnswer);
// var buttonOne = document.querySelector("#0");
// buttonOne.addEventListener("click", function(){
//     var theRightAnswer = questionsWithChoices[currentQuestionIndex].correctAnswer;
     
//     console.log(theRightAnswer);
//     console.log(buttonOne.textContent);

// })