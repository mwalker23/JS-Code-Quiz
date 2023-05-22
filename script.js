var timeEl = document.querySelector(".time");
var startButton = document.querySelector("#start");
var secondsLeft = 16;
var questionNumber= 0;
var questionDivs = document.querySelectorAll(".content");
console.log(questionDivs);


function quizStart (){
  startButton.classList.add("hide");
  questionDivs[questionNumber].classList.remove("hide");
  setTime();
}

//timer 
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds remaining";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage("GameOver");
      }
  
    }, 1000);
  }
 
  
//call a function to check answer
function answerQuestion (event) {
  console.log(event.target);
  if (event.target.value == "true") {
    console.log("right answer");
  } else {
    console.log("wrong answer");
    secondsLeft -= 3;
  }


  questionDivs[questionNumber].classList.add("hide");
questionNumber ++
questionDivs[questionNumber].classList.remove("hide");

}
  //add and remove classes in js (display none)

// WHEN all questions are answered or the timer reaches 0



// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score


