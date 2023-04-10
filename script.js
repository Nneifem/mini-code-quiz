var changeQuestions = document.querySelector("#quiz-overview");

var questionsWithChoices = [
    {
        question: "How are arrays determined?",
        answer1: "Parenthesis ()",
        answer2: "Curly Bracket {}",
        answer3: "Bracket []",
        answer4: "None of the above"
    },

    {
        question: "What defines a class and what defines a id",
        answer1: "class: # , id: .",
        answer2: "class: . , id: +",
        answer3: "class () , id: #",
        answer4: "class: . , id: #"
    }
]

changeQuestions.addEventListener("click", function(){
    console.log("click me");
})