var timeEl = document.querySelector(".time");
var startButton = document.querySelector("#start");
// var mainEl = document.getElementById("main");
var secondsLeft = 31;
var questionNumber= 0;
var questionDivs = document.querySelectorAll(".content");
console.log(questionDivs);



// var wordVar = true;
// var childFunction = true;
// var objectLiteral = true;


function quizStart (){
  startButton.classList.add("hide");
  questionDivs[questionNumber].classList.remove("hide");
  setTime();
}
// question function 

//timer (make timer element)
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds remaining";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
 
  

function answerQuestion (event) {
  console.log(event.target);
  //call a function to check answer
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


