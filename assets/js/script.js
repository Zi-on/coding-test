var startButton = document.getElementById("start");
var startScreen = document.getElementById("startScreen");
var startScreenText = document.getElementById("startScreenText");
var question = document.getElementById("question");
var answerChoices = document.getElementById("answerChoices");
var answerChoiceA = document.getElementById("A");
var answerChoiceB = document.getElementById("B");
var answerChoiceC = document.getElementById("C");
var answerChoiceD = document.getElementById("D");
var time = document.getElementById("time");
var finalScreen = document.getElementById("end-screen");
var score = document.getElementById("score");
var startTime = 60;
var question1 = [
  "1.Of the following, if statements, which one correctly executes three instructions if the condition is true?",
  "If (x < 0) a = b * 2; y = x; z = a – y;",
  "{ if (x < 0) a = b * 2; y = x; z = a – y; }",
  "If{ (x < 0) a = b * 2; y = x; z = a – y ; }",
  "If (x < 0) { a = b * 2; y = x; z = a – y; }",
]; //answer is last choice
var question2 = [
  "2.Kim has just constructed her first for loop within the Java language.  Which of the following is not a required part of a for loop?",
  "Initialization",
  "Condition",
  ") increment",
  "Variable",
];
var question3 = [
  "3.Sal needs to execute a section of code ten times within a program. Compare the selection structures below and select which one meets the needs identified.",
  "if-Else",
  "While",
  "If",
  "For",
];
var question4 = [
  "4.Which command will stop an infinite loop?",
  "Alt-C",
  "Shift-C",
  "Esc",
  "Ctrl-C",
];
var question5 = [
  "5.Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0?",
  "If (x > 0) x++; else x--;",
  "If (x > 0) x++; else if (x < 0) x--;",
  "X++; x--;",
  "If (x == 0) x = 0; else x++; x--;",
];
var question6 = [
  "6.During program development, software requirements specify",
  "How the program will accomplish the task",
  "How to test the program when it is done",
  "How to divide the task into subtasks",
  "What the task is that the program must perform",
];

startButton.addEventListener("click", startTest);

/*function startTimer() {
  var timer = setInterval(myTimer, 1000);
  var startTime = 60;

  function myTimer() {
      if (startTime > 1){
    time.innerHTML = --startTime;
      }
    else if (startTime == 0) {
      clearInterval(timer);
    }
  }
}
*/
function startTest() {
  startScreen.classList.add("hide");
  startScreenText.classList.add("hide");
  startButton.classList.add("hide");
  question.classList.remove("hide");
  answerChoices.classList.remove("hide");
  question.innerHTML = question1[0];
  answerChoiceA.innerHTML = question1[1];
  answerChoiceB.innerHTML = question1[2];
  answerChoiceC.innerHTML = question1[3];
  answerChoiceD.innerHTML = question1[4];
  checkAnswer();
}

function checkAnswer() {
    function startTimer() {
        var timer = setInterval(myTimer, 1000);
        
      
        function myTimer() {
            if (startTime > 0){
          time.innerHTML = --startTime;
            }
          else if (startTime == 0) {
            clearInterval(timer);
            function endScreen() {
                question.classList.add("hide");
                answerChoices.classList.add("hide");
                finalScreen.classList.remove("hide");
                score.innerHTML =
                  "You failed to finish the test.";
              }
            return endScreen();
          }
        }
      }
      startTimer();

  answerChoiceA.addEventListener("click", wrongAnswer);
  answerChoiceB.addEventListener("click", wrongAnswer);
  answerChoiceC.addEventListener("click", wrongAnswer);
  answerChoiceD.addEventListener("click", rightAnswer);

  var questionNumber = [1];
  var correctAnswer = [0];
  var incorrectAnswer = [0];
  

  function rightAnswer() {
    if (questionNumber == 1) {
      ++correctAnswer;
      ++questionNumber;
      console.log(correctAnswer);
      nextQuestion();
    } else if (questionNumber == 2) {
      ++questionNumber;
      ++correctAnswer;
      console.log(correctAnswer);
      secondQuestion();
    } else if (questionNumber == 3) {
      ++questionNumber;
      ++correctAnswer;
      console.log(correctAnswer);
      thirdQuestion();
    } else if (questionNumber == 4) {
      ++correctAnswer;
      ++questionNumber;
      console.log(correctAnswer);
      forthQuestion();
    } else if (questionNumber == 5) {
      ++correctAnswer;
      ++questionNumber;
      console.log(correctAnswer);
      fifthQuestion();
    } else {
      ++correctAnswer;
      console.log("final: " + correctAnswer);
      function endScreen() {
        question.classList.add("hide");
        answerChoices.classList.add("hide");
        finalScreen.classList.remove("hide");
        score.innerHTML =
          "You answered " + correctAnswer + " out of 6 correct.";
      }
      endScreen();
    }
  }

  function wrongAnswer() {
    if (questionNumber == 1) {
        startTime -= 10;
      ++questionNumber;
      ++incorrectAnswer;
      console.log(incorrectAnswer);
      nextQuestion();
    } else if (questionNumber == 2) {
        startTime -= 10;
      ++questionNumber;
      ++incorrectAnswer;
      console.log(incorrectAnswer);
      secondQuestion();
    } else if (questionNumber == 3) {
        startTime -= 10;
      ++incorrectAnswer;
      ++questionNumber;
      console.log(incorrectAnswer);
      thirdQuestion();
    } else if (questionNumber == 4) {
        startTime -= 10;
      ++questionNumber;
      ++incorrectAnswer;
      console.log(incorrectAnswer);
      forthQuestion();
    } else if (questionNumber == 5) {
        startTime -= 10;
      ++incorrectAnswer;
      ++questionNumber;
      console.log(incorrectAnswer);
      fifthQuestion();
    } else {
      ++incorrectAnswer;
      console.log("final: " + incorrectAnswer);
      function endScreen() {
        question.classList.add("hide");
        answerChoices.classList.add("hide");
        finalScreen.classList.remove("hide");
        score.innerHTML =
          "You answered " + correctAnswer + " out of 6 correct.";
      }
      endScreen();
    }
  }
}

function nextQuestion() {
  question.innerHTML = question2[0];
  answerChoiceA.innerHTML = question2[1];
  answerChoiceB.innerHTML = question2[2];
  answerChoiceC.innerHTML = question2[3];
  answerChoiceD.innerHTML = question2[4];
}

function secondQuestion() {
  question.innerHTML = question3[0];
  answerChoiceA.innerHTML = question3[1];
  answerChoiceB.innerHTML = question3[2];
  answerChoiceC.innerHTML = question3[3];
  answerChoiceD.innerHTML = question3[4];
}

function thirdQuestion() {
  question.innerHTML = question4[0];
  answerChoiceA.innerHTML = question4[1];
  answerChoiceB.innerHTML = question4[2];
  answerChoiceC.innerHTML = question4[3];
  answerChoiceD.innerHTML = question4[4];
}

function forthQuestion() {
  question.innerHTML = question5[0];
  answerChoiceA.innerHTML = question5[1];
  answerChoiceB.innerHTML = question5[2];
  answerChoiceC.innerHTML = question5[3];
  answerChoiceD.innerHTML = question5[4];
}

function fifthQuestion() {
  question.innerHTML = question6[0];
  answerChoiceA.innerHTML = question6[1];
  answerChoiceB.innerHTML = question6[2];
  answerChoiceC.innerHTML = question6[3];
  answerChoiceD.innerHTML = question6[4];
}
