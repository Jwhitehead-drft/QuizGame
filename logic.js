
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
// Select start button and store 
var startBtn = document.getElementById("start");
var questionsElement = document.getElementById("questions");

// Call startQuiz function on button click;
startBtn.onclick = startQuiz;

// Timer
var count = questions.length ;
var timer = setInterval(function() {
console.log(count);
count--;
if(count === 0) {
    stopInterval()
}
}, 1000);

var stopInterval = function() {
console.log('time is up!');
clearInterval(timer);
}

// Function for initiating quiz
function startQuiz() {
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");

    // Unhide the questions
    questionsElement.removeAttribute("class");
    console.log(questions[0].question)
    console.log(questions[0].choices)
    // timeEl();
    // getCurrentQuestion()
}  


<script>
var intervalId=""
function myFunction() {
intervalId=setInterval(function(){ -- time; }, 3000);
}

function stop() {
clearInterval(intervalId)
}
</script>








// Start button (x)

// Hide start button and Text (x)

// Display the first question() and 4 answer buttons() and a Timer() for # of questions * 15s(x)
// Timer should decrement by 1 each second using setInterval(x)

// After an answer is selected(),use timeout to show Correct or Incorrect message temporarily(),  if incorrect, subtract 15s from Timer(), if correct, no time is subtract from timer

//  hide question 1 and show next question()

//  When timer reaches == 0,or all questions are complete,()  stop timer() , show end display with end time and input for initials(). After inputting initials, post time to scoreboard(), and give option to view scoreboard or play again().

//  Scoreboard should be sorted from highest value to lowest ()
