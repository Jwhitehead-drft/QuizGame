// Select start button and store 
var startBtn = document.getElementById("startBtn");
var questionsElement = document.querySelector(".questions");
var start = document.querySelector(".start")
var answerElement = document.querySelector(".choiceList");
var clock = document.querySelector(".clock")
var saveBtn = document.querySelector("#saveBtn")
var initials = document.querySelector("#Initials")
var result = document.querySelector(".result")
var showQuestion = document.querySelector(".showQuestion")
var time = document.querySelector(".time")
// Call startQuiz function on button click;
startBtn.addEventListener("click", startQuiz)

// Timer
var quizMessage = document.querySelector(".quizMessage")
var count = questionArray.length * 15;
var timeId = ""
var questionIndex = 0
var stopInterval = function () {
    console.log('time is up!');
    clearInterval(timeId);
}
var highScore = localStorage.getItem("highScore") ? JSON.parse(localStorage.getItem("highScore")) :   []     ;
function displayQuestion() {
  
    if(questionIndex === questionArray.length) {
        clearInterval(timeId)
        return
    }

    quizMessage.textContent = ""
    questionsElement.textContent = questionArray[questionIndex].question
    answerElement.textContent = ""


    for (let i = 0; i < questionArray[questionIndex].choices.length; i++) {
        //<li></li>    
        var li = document.createElement("li")
        var button = document.createElement("button")
        button.textContent = questionArray[questionIndex].choices[i]
        button.setAttribute("data-id", i)
        button.addEventListener("click", nextQuestion)
        li.append(button)
        answerElement.append(li)
    }
}
function nextQuestion() {
    console.log(questionIndex)

    if (questionIndex < questionArray.length) {
        // compare answer to array value in correctAnswer
        if (questionArray[questionIndex].correctAnswer === parseInt(this.getAttribute("data-id"))) {
            // quiz message
            quizMessage.textContent = "Correct"
        }
        else {
            quizMessage.textContent = "Incorrect"
            count = count - 15
        }
        questionIndex++

        if (questionIndex === questionArray.length) {
            result.classList.remove("hide");
            showQuestion.classList.add("hide");
            clearInterval(timeId);
            return
        }
        setTimeout(displayQuestion, 1000);
    }
    else {
        result.classList.remove("hide");
        showQuestion.classList.add("hide");
        clearInterval(timeId);
    }

}
// function for saving highscore
function save() {

    var newScore = {
        highScore: count,
        initial: initials.value
    }

    highScore.push(newScore)
    localStorage.setItem("highScore", JSON.stringify(highScore));

    var highScoreList = JSON.parse(localStorage.getItem("highScore"))
    document.getElementById("scoreBoard").innerHTML= ""

    highScoreList = highScoreList.sort(function(a,b){
        return b.highScore - a.highScore
    })
    for (let i = 0; i < highScoreList.length; i++) {
         var li = document.createElement("li")
         li.innerHTML=highScoreList[i].highScore+" - " + highScoreList[i].initial
        document.getElementById("scoreBoard").append(li)
    }
    

    // document.querySelector(".highScore").innerHTML = 
    document.querySelector(".highScore").classList.remove("hide")
    result.classList.add("hide")
    time.classList.add("hide")
}
saveBtn.addEventListener("click", save)
// Function for initiating quiz
function startQuiz() {

    start.classList.add("hide")
    timeId = setInterval(function () {
        console.log(count);
        count--;
        clock.textContent = count
        if (count === 0) {
            stopInterval()
        }
    }, 1000);

    displayQuestion()
}

var intervalId = ""
function myFunction() {

    intervalId = setInterval(function () {
        --time;
    }, 10)

}



function stop() {
    clearInterval(intervalId)
}

