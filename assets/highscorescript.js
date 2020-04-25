// Clear button that on click clears the users local storage
$("#clear-score-button").click(function (event) {
    localStorage.clear();
    location.reload();
});
// Go back button that on click brings user back to the beginning of the quiz. (reloads index.html)
$("#goback-button").click(function (event) {
    window.location.replace("./index.html");
});

// Function that retrieves users initals, score, and time remaining from local storage and displays them as li elements in sorted order from highest to lowest in the content box of the html.
function displayScores() {

    var allScoresStorage = localStorage.getItem("allScoresStorage");
    allScoresStorage = JSON.parse(allScoresStorage).sort(function (a, b) {
        return b.score - a.score;
    });
    if (allScoresStorage !== null) {

        for (var i = 0; i < allScoresStorage.length; i++) {

            var scoreListItem = $("<li>");
            scoreListItem.addClass("score-list-item");
            scoreListItem.text("INT: " + allScoresStorage[i].initials + " - SCR: " + allScoresStorage[i].score + " - TR: " + allScoresStorage[i].timeRemaining);
            $("#highscore-list").append(scoreListItem);
        }
    }
}

displayScores();

