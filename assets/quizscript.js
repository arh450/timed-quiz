// Declared variables pertaining to overall game.
var score = 0;
var seconds = 76;
var penalty = 10;
var timerInterval;
var timeRemaining;
var initials;

// Array with objects containing questions, choices, and correct answers.
var questions = [
  {
    title: "Who is the current all-time homerun leader?",
    choiceA: "Babe Ruth",
    choiceB: "Bud Abbott",
    choiceC: "Barry Bonds",
    choiceD: "Lou Costello",
    correctAnswer: "c",
  },
  {
    title: "What team won the 1994 World Series?",
    choiceA: "New York Yankees",
    choiceB: "Atlanta Braves",
    choiceC: "Montreal Expos",
    choiceD: "No Team Won",
    correctAnswer: "d",
  },
  {
    title:
      "What player did Mr.Burns kick off The Springfield Nuclear Power Plant softball team due to his sideburns?",
    choiceA: "Jose Canseco",
    choiceB: "Don Mattingly",
    choiceC: "Steve Sax",
    choiceD: "Wade Boggs",
    correctAnswer: "b",
  },
  {
    title:
      "Which of these people played professional baseball and football simultaneously?",
    choiceA: "David Wells",
    choiceB: "Dion Sanders",
    choiceC: "John Candy",
    choiceD: "Bartolo Colon",
    correctAnswer: "b",
  },
  {
    title: "What famous criminal was once a professional baseball player?",
    choiceA: "John Dillinger",
    choiceB: "Lucky Luciano",
    choiceC: "Ted Bundy",
    choiceD: "Al Capone",
    correctAnswer: "a",
  },
];

// Declared variables pertaining to rendered question/position of index.
var lastQuestion = questions.length;
var runningQuestion = 0;
var correct;

// Function that hides/shows start/during quiz container, renders a question, and begins the timer.
function startQuiz() {
  $("#start-quiz-container").hide();
  renderQuestion();
  startTimer();
  $("#during-quiz-container").show();
}

// On click of start quiz button that triggers the start quiz function and makes quiz begin.
$("#start-quiz-button").click(function (event) {
  event.preventDefault();
  startQuiz();
});

// Function that uses the questions array of objects and displays the question and choices to the html... and when the running question count is greater than the length of the array calls the endquiz function described below.
function renderQuestion() {
  if (runningQuestion >= lastQuestion) {
    endQuiz();
  } else {
    var question = questions[runningQuestion];
    $("#question").text(question.title);
    $("#a").text(question.choiceA);
    $("#b").text(question.choiceB);
    $("#c").text(question.choiceC);
    $("#d").text(question.choiceD);
  }
}

// Time function that decreases amount of seconds by 1 and displays time remaing on html, and when (if) seconds reaches 0 stops the timer and calls the endquiz function.
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

// Function that compares array object position to the users onclick of choice button detailed in html and if correct adds 1 to the score and a "Correct!" is flashed on html, and if incorrect 10 seconds is removed from the timer and a "Incorrect!" is flashed on html. These is then 1 second before the next question is rendered.
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

// Function that hides the start and during quiz containers and shows the end quiz container.  Function also stops the timer and replaces the time to a "-s", and in the content box the users correct score and time they had remaining is shown.
function endQuiz() {
  timeRemaining = seconds;
  $("#start-quiz-container").hide();
  $("#during-quiz-container").hide();
  $("#end-quiz-container").show();
  clearInterval(timerInterval);
  $("#time-remaining").text("Time Remaining: -s");
  $("#final-score").text(
    "Final Score: " +
      score +
      " correct" +
      " and " +
      timeRemaining +
      " seconds left"
  );
}

// Function that takes and ensures the user has input their initials, and then stores their quiz data into localstorage and then loads the highscore html.
function initialSubmit() {
  $("#initials-submit-button").click(function () {
    initials = $("input").val();

    if (initials === "") {
      $("#please-enter-intials")
        .text("Please enter initials!")
        .css("color", "red");
    } else {
      var finalScore = {
        initials: initials,
        score: score,
        timeRemaining: timeRemaining,
      };
      // console.log(finalScore);
      var allScoresStorage = localStorage.getItem("allScoresStorage");
      if (allScoresStorage === null) {
        allScoresStorage = [];
      } else {
        allScoresStorage = JSON.parse(allScoresStorage);
      }

      allScoresStorage.push(finalScore);
      var newScore = JSON.stringify(allScoresStorage);
      localStorage.setItem("allScoresStorage", newScore);

      window.location.replace("./highscore.html");
    }
  });
}

initialSubmit();
