$(document).ready(function(){
//section containting the questions and answers
const answers = $('.answers');

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
const questionOne = [
    {
        question: "When was the Magna Carta written?",
        answers: [1492, 1215, 1776],
        correct: 1215
    }
] ;
// const questionTwo = [
//     {
//         question: "Which monarch was beheaded during the English Civil War?",
//         answers: ["Charles I", "John", "Edward II"],
//         correct: "Charles I"
//     } 
// ];
// const questionThree = [ 
//     {
//         question: "Who was the monarch during the American Revolution?",
//         answers: ["George I", "George II", "George III"],
//         correct: "George III"
//     }
// ];
// const questionFour = [
//     {
//         question: "Which monarch was known as the 'Virgin Queen'?",
//         answers: ["Mary I", "Elizabeth I", "Victoria"],
//         correct: "Elizabeth I"
//     }
// ];
//The page is set up to hide most of the buttons except for start

$('.questions').hide();
$('#first-answer').hide();
$('#second-answer').hide();
$('#third-answer').hide();
$('#next').hide();
console.log("answers are hidden for now")
//The game begins when the start button is pressed and it disappears

$('#start').on('click', function(){
    $('#start').hide();
    console.log("Start is hidden")
    $('.questions').show();
    $('#first-answer').show();
    $('#second-answer').show();
    $('#third-answer').show();
    $('h1').hide();
    //firstQuestion();
    quiz.questions();
});


// const firstQuestion = (questions) => {
//     questionOne.forEach(function(questions) {
//         console.log(questions);
//         $('#question').append(questions.question);
//         $('#first-answer').append(questions.answers[0]);
//         $('#second-answer').append(questions.answers[1]);
//         $('#third-answer').append(questions.answers[2]);
//     });
// };

var quiz = {
    questionsAnswers: questionsAnswers,
    currentQuestion: 0,
    right: 0,
    wrong: 0,

    questions: function(){
        $('#question').append(questionsAnswers[this.currentQuestion].question);
        
        // for(let i = 0; questionsAnswers[this.currentQuestion].answers.length; i++){   
        //     answers.append("<button class = 'answer-btn' data-name='" + questionsAnswers[this.currentQuestion].answers[i]
        //     + "'>" + questionsAnswers[this.currentQuestion].answers[i] + "</button>")
        // }
        console.log("I'm in the question function!");
    }

};



});