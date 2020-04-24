

$("#clear-score-button").click(function (event) {
    localStorage.clear();
    location.reload();
});

var allScoresStorage = localStorage.getItem("allScoresStorage");
allScoresStorage = JSON.parse(allScoresStorage).sort(function (a, b) {
    return b.score - a.score;
});

function displayScores() {

    if (allScoresStorage !== null) {

        for (var i = 0; i < allScoresStorage.length; i++) {

            var scoreListItem = $("<li>");
            scoreListItem.addClass("score-list-item");
            scoreListItem.text(allScoresStorage[i].initials + " " + allScoresStorage[i].score + " " + allScoresStorage[i].timeRemaining);
            $("#highscore-list").append(scoreListItem);

        }
    }
}

displayScores();

$("#goback-button").click(function (event) {
    window.location.replace("./index.html");
});