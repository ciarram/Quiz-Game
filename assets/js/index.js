$(document).ready(function(){
//section containting the questions and answers
const questionOne = [
    {
        question: "When was the Magna Carta written?",
        answers: [1492, 1215, 1776],
        correct: 1215
    }
] ;
const questionTwo = [
    {
        question: "Which monarch was beheaded during the English Civil War?",
        answers: ["Charles I", "John", "Edward II"],
        correct: "Charles I"
    } 
];
const questionThree = [ 
    {
        question: "Who was the monarch during the American Revolution?",
        answers: ["George I", "George II", "George III"],
        correct: "George III"
    }
];
const questionFour = [
    {
        question: "Which monarch was known as the 'Virgin Queen'?",
        answers: ["Mary I", "Elizabeth I", "Victoria"],
        correct: "Elizabeth I"
    }
];
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
    firstQuestion();
});

const firstQuestion = () => {
    questionOne.forEach(function(element) {
    console.log(element);
    $('#question').append(element.question);
    $('#first-answer').append(element.answers[0]);
    $('#second-answer').append(element.correct);
    $('#third-answer').append(element.answers[2]);
    $('.buttons').on('click', function(){
        if(element.correct){
            console.log("Incorrect");
        } else {
            console.log("Correct ");
        }
    })
   });
};

   questionTwo.forEach(function(element) {

    console.log(element);
});

questionThree.forEach(function(element) {

    console.log(element);
});

questionFour.forEach(function(element) {

    console.log(element);
});

// const firstQuestion = () => {
//    $('#question').append(questionsAnswers[0].question);


    // $('#first-answer').append(questionsAnswers[0].answers[0]);
    // $('#second-answer').append(questionsAnswers[0].correct);
    // $('#third-answer').append(questionsAnswers[0].answers[2]);
    // console.log("Function " + questionsAnswers[0].question);
//}


});