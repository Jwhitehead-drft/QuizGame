// Select start button and store 
var startBtn = document.getElementById("startBtn");
var questionsElement = document.querySelector(".questions");
var start = document.querySelector(".start")
var answerElement = document.querySelector(".choiceList");
var clock = document.querySelector(".clock")
// Call startQuiz function on button click;
startBtn.addEventListener("click", startQuiz)

// Timer
var count = questionArray.length*15;
var timeId = ""
var questionIndex = 0
var stopInterval = function () {
    console.log('time is up!');
    clearInterval(timeId);
}
function displayQuestion() {
    questionsElement.textContent=questionArray[questionIndex].question
     for (let i = 0; i < questionArray[questionIndex].choices.length; i++) {
        //<li></li>    
        var li = document.createElement("li")
//<li>rs</li>
            li.textContent = questionArray[questionIndex].choices[i]
            answerElement.append(li)
     }
}
// Function for initiating quiz
function startQuiz() {

     start.classList.add("hide") 
      timeId = setInterval(function () {
        console.log(count);
        count--;
        clock.textContent=count
        if (count === 0) {
            stopInterval()
        }
    }, 1000);

    displayQuestion()

    // var startScreen = document.querySelector("#start-screen");
    // startScreen.setAttribute("class", "hide");

    // // Unhide the questions
    // questionsElement.removeAttribute("class");
    // console.log(questions[0].question)
    // console.log(questions[0].choices)
    // timeEl();
    // getCurrentQuestion()
}

    var intervalId=""
function myFunction() {

        intervalId = setInterval(function () {
            --time;
        }, 1000)

    }



function stop() {
        clearInterval(intervalId)
    }









// Start button (x)

// Hide start button and Text (x)

// Display the first question() and 4 answer buttons() and a Timer() for # of questions * 15s(x)
// Timer should decrement by 1 each second using setInterval(x)

// After an answer is selected(),use timeout to show Correct or Incorrect message temporarily(),  if incorrect, subtract 15s from Timer(), if correct, no time is subtract from timer

//  hide question 1 and show next question()

//  When timer reaches == 0,or all questions are complete,()  stop timer() , show end display with end time and input for initials(). After inputting initials, post time to scoreboard(), and give option to view scoreboard or play again().

//  Scoreboard should be sorted from highest value to lowest ()
