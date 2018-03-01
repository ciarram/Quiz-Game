$(document).ready(function(){
//section containting the questions and answers
const answerButtons = $('.answers');

const questionsAnswers = [
    {
        question: "When was the Magna Carta written?",
        answers: [1492, 1215, 1776],
        correct: 1215
    },  {
        question: "Which monarch was beheaded during the English Civil War?",
        answers: ["Charles I", "John", "Edward II"],
        correct: "Charles I"
    } , {
        question: "Who was the monarch during the American Revolution?",
        answers: ["George I", "George II", "George III"],
        correct: "George III"
    } , {
        question: "Which monarch was known as the 'Virgin Queen'?",
        answers: ["Mary I", "Elizabeth I", "Victoria"],
        correct: "Elizabeth I"
    }
];

//The page is set up to hide most of the buttons except for start

$('.questions').hide();
$('#next').hide();
console.log("answers are hidden for now")
//The game begins when the start button is pressed and it disappears

$('#start').on('click', function(){
    $('#start').hide();
    console.log("Start is hidden")
    $('.questions').show();
    // $('#first-answer').show();
    // $('#second-answer').show();
    // $('#third-answer').show();
    $('h1').hide();
    //firstQuestion();
    quiz.questions();
});

$('.answer-btn').on('click', function(){
    quiz.possibleAnswers();
});


var quiz = {
    questionsAnswers: questionsAnswers,
    currentQuestion: 0,
    right: 0,
    wrong: 0,

    questions: function(){
        $('#question').append(questionsAnswers[this.currentQuestion].question);
        
        for(var i = 0; i < questionsAnswers[this.currentQuestion].answers.length; i++){   
            answerButtons.append("<button class = 'answer-btn' data-name='" + questionsAnswers[this.currentQuestion].answers[i]
            + "'>" + questionsAnswers[this.currentQuestion].answers[i] + "</button>")
        };
        console.log("I'm in the question function!");
    }, 

    possibleAnswers: function(){
        if(questionsAnswers[this.currentQuestion].answers === questionsAnswers[this.currentQuestion].correct){
            right ++;
            console.log("Correct!!");
        } else {
            wrong ++;
            console.log("Incorrect");
        }
    },


    nextQuestion: function (){
        currentQuestion ++
        quiz.questions();
    }

};



});