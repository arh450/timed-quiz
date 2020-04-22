var score = 0;
var currentQuestion = 0;
var seconds = 6;

var questions = [
    {
        title: "Who is the current all-time homerun leader?",
        answers: ["Babe Ruth", "Bud Abbott", "Barry Bonds", "Lou Costello"],
        correct: 2
    },
    {
        title: "What team won the 1994 World Series?",
        answers: ["New York Yankees", "Atlanta Braves", "Montreal Expos", "No Team Won"],
        correct: 3
    },
    {
        title: "Who is the current all-time homerun leader?",
        answers: ["Babe Ruth", "Bud Abbott", "Barry Bonds", "Lou Costello"],
        correct: 2
    },
    {
        title: "Which of these people played professional baseball and football simultaneously",
        answers: ["David Wells", "Dion Sanders", "John Candy", "Bartolo Colon"],
        correct: 1
    },
    {
        title: "What famous criminal was once a professional baseball player?",
        answers: ["Lucky Luciano", "Al Capone", "John Dillinger", "Ted Bundy"],
        correct: 2
    },
];

$(document).ready(function () {

    $("#start-quiz-button").click(function (event) {
        event.preventDefault();
        $("#start-quiz-container").hide();
        $("#during-quiz-container").show();
        showQuestion();
        startTimer();
    });
});

function startTimer() {
    timerInterval = setInterval(function () {
        seconds--;
        $("#time-remaining").html("");
        $("#time-remaining").text("Time Remaining: " + seconds + "s");

        if (seconds <= 0) {
            clearInterval(timerInterval);
            seconds = 0;
            $("#time-remaining").text("Time Remaining: 0s");
        }

    }, 1000);

}

function showQuestion() {
    var question = questions[currentQuestion];
    $("#question").text(question.title);
    $("#answer-area").html("");
    for (var i = 0; i < question.answers.length; i++) {
        $("#answer-area").append(`<li id='${i}'><button>${question.answers[i]}<button></li>`);
    }
}
    // function checkAnswer() {

    // }

    // function showFinalScore() {

    // }