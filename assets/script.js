var score = 0;
var seconds = 76;


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
        title: "What player did Mr.Burns kick off The Springfield Nuclear Power Plant softball team for his sideburns?",
        choiceA: "Jose Canseco",
        choiceB: "Don Mattingly",
        choiceC: "Steve Sax",
        choiceD: "Wade Boggs",
        correctAnswer: "b"
    },
    {
        title: "Which of these people played professional baseball and football simultaneously",
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

var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;
var correct;


function renderQuestion() {
    var question = questions[runningQuestionIndex];
    $("#question").text(question.title);
    $("#a").text(question.choiceA);
    $("#b").text(question.choiceB);
    $("#c").text(question.choiceC);
    $("#d").text(question.choiceD);
    renderQuestion()
    runningQuestionIndex++;

}
renderQuestion();

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

function checkAnswer(answer) {
    correct = questions[runningQuestionIndex].correctAnswer;

    if (answer === correct && runningQuestionIndex !== lastQuestionIndex) {
        $("#answer-result").text("Correct!").css("color", "green");
    } else {
        $("#answer-result").text("Incorrect!").css("color", "red");
    }

}