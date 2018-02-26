$(document).ready(function(){

const questionsAnswers = [
    {
        question: "When was the Magna Carta written?",
        answers: [1492, 1215, 1776],
        correct: 1215
    } , {
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
$('.questions').hide();
$('#first-answer').hide();
$('#second-answer').hide();
$('#third-answer').hide();
$('#next').hide();
console.log("answers are hidden for now")

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
    $('#question').append(questionsAnswers[0].question);
    $('#first-answer').append(questionsAnswers[0].answers[0]);
    $('#second-answer').append(questionsAnswers[0].answers[1]);
    $('#third-answer').append(questionsAnswers[0].answers[2]);
    console.log("Function " + questionsAnswers[0].question);
}


});