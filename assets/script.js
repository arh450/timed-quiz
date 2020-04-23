var score = 0;
var seconds = 76;
var penalty = 10;
var timerInterval;


var questions = [
    {
        title: "Who is the current all-time homerun leader?",
        choiceA: "Babe Ruth",
        choiceB: "Bud Abbott",
        choiceC: "Barry Bonds",
        choiceD: "Lou Costello",
        correctAnswer: "c"
    },
    {
        title: "What team won the 1994 World Series?",
        choiceA: "New York Yankees",
        choiceB: "Atlanta Braves",
        choiceC: "Montreal Expos",
        choiceD: "No Team Won",
        correctAnswer: "d"
    },
    {
        title: "What player did Mr.Burns kick off The Springfield Nuclear Power Plant softball team due to his sideburns?",
        choiceA: "Jose Canseco",
        choiceB: "Don Mattingly",
        choiceC: "Steve Sax",
        choiceD: "Wade Boggs",
        correctAnswer: "b"
    },
    {
        title: "Which of these people played professional baseball and football simultaneously?",
        choiceA: "David Wells",
        choiceB: "Dion Sanders",
        choiceC: "John Candy",
        choiceD: "Bartolo Colon",
        correctAnswer: "b"
    },
    {
        title: "What famous criminal was once a professional baseball player?",
        choiceA: "John Dillinger",
        choiceB: "Lucky Luciano",
        choiceC: "Ted Bundy",
        choiceD: "Al Capone",
        correctAnswer: "a"
    }
];

var lastQuestion = questions.length;
var runningQuestion = 0;
var correct;

function renderQuestion() {
    if (runningQuestion >= lastQuestion) {
        endQuiz();
    }
    var question = questions[runningQuestion];
    $("#question").text(question.title);
    $("#a").text(question.choiceA);
    $("#b").text(question.choiceB);
    $("#c").text(question.choiceC);
    $("#d").text(question.choiceD);
}

function startTimer() {
    timerInterval = setInterval(function () {
        seconds--;
        $("#time-remaining").html("");
        $("#time-remaining").text("Time Remaining: " + seconds + "s");

        if (seconds <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function checkAnswer(answer) {
    correct = questions[runningQuestion].correctAnswer;

    if (answer === correct && runningQuestion !== lastQuestion) {
        $("#answer-result").show().text("Correct!").css("color", "green");
        score++;
    } else {
        $("#answer-result").show().text("Incorrect!").css("color", "red");
        seconds = seconds - penalty;
    }
    if (runningQuestion <= lastQuestion) {
        setTimeout(function () {
            $("#answer-result").hide();
            runningQuestion++;
            renderQuestion();
        }, 1000);
    }
}

function startQuiz() {
    $("#start-quiz-container").hide();
    renderQuestion();
    startTimer();
    $("#during-quiz-container").show();
}

$("#start-quiz-button").click(function (event) {
    event.preventDefault();
    startQuiz();
});

function endQuiz() {
    $("#start-quiz-container").hide();
    $("#during-quiz-container").hide();
    $("#end-quiz-container").show();
    clearInterval(timerInterval);
    $("#time-remaining").text("Time Remaining: -s")
    $("#final-score").text("Final Score: " + score);
}




