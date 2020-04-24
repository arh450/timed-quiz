

$("#clear-score-button").click(function (event) {
    localStorage.clear();
    location.reload();
});

$("#goback-button").click(function (event) {
    window.location.replace("./index.html");
});

function displayScores() {

    var allScoresStorage = localStorage.getItem("allScoresStorage");
    allScoresStorage = JSON.parse(allScoresStorage).sort(function (a, b) {
        return b.score - a.score;
    });
    if (allScoresStorage !== null) {

        for (var i = 0; i < allScoresStorage.length; i++) {

            var scoreListItem = $("<li>");
            scoreListItem.addClass("score-list-item");
            scoreListItem.text("INT: " + allScoresStorage[i].initials + ", SCR: " + allScoresStorage[i].score + ", TR: " + allScoresStorage[i].timeRemaining);
            $("#highscore-list").append(scoreListItem);

        }
    }
}

displayScores();

