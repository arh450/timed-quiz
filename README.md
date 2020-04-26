# Timed Baseball Quiz

## Brief Description

This is a responsive game application that presents a user to answer a series of questions about baseball in a given amount of time.

The user is allowed 75 seconds to answers the questions, however if the user happens to answer a question incorrectly, 10 seconds is removed from the timer.

Upon completion of the quiz, the user is presented their final score and to submit their initials.  The user is then brought to the Highscore Leaderboard where they can compare past scores.

### URL 

#### https://gheptig.github.io/timed-quiz/

### Technical Features

* The responsive layout is contructed using Bootstrap's grid/column system.

* This application was built using JavaScript and jQuery to both function and display page elements.

* Structure/styling for the game uses HTML5, CSS3, and Bootstrap 4.

### How it Works

By clicking the "Start Quiz" button a 75 second timer begins.  The user is presented a series of questions/multiple choices answers through the use of a varialbe array containing objects.  The questions/answers are dynamically displayed on the HTML page and presented using a set of on click buttons. If a user answers a question correctly they will be notififed on the page and their correct answer will be tallied.  However if a user answers a question incorrectly they will also be notified on the page and 10 seconds will be subtracted from their current time.  The next question is then rendered for the user.  Upon completion of the quiz, the user's final score and time remaining is displayed.  If the user ran out of time they would also be brought to this final score page.  The user is then to submit their intials which then along with their score/time are sent to localstorage.  The user is then brought to the Highscore Leaderboard that retireves the users previous scores/times and are displayed in order from highest to lowest.  This page contains one button that allows the user to go back and play the quiz again, and another button that allows the user to clear the Leaderboard list.  

### Preview

![Screenshot of Quiz](images/screenshot_1.PNG)

![Screenshot of Quiz](images/screenshot_2.PNG)

![Screenshot of Quiz](images/screenshot_3.PNG)

### Contributers/Authors

* Augustus Heptig - Author/Creator

    * Body background image for application was found on https://unsplash.com/ *The internet’s source of freely usable images*. 