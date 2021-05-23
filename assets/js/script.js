var startButton = document.getElementById('start');
var startScreen = document.getElementById('startScreen');
var startScreenText = document.getElementById('startScreenText')
var question = document.getElementById('question')
var answerChoices = document.getElementById('answerChoices')
var answerChoiceA = document.getElementById('A')
var answerChoiceB = document.getElementById('B')
var answerChoiceC = document.getElementById('C')
var answerChoiceD = document.getElementById('D')
var time = document.getElementById('time')

var question1 = ["Of the following, if statements, which one correctly executes three instructions if the condition is true?", 
"If (x < 0) a = b * 2; y = x; z = a – y;", 
"{ if (x < 0) a = b * 2; y = x; z = a – y; }", 
"If{ (x < 0) a = b * 2; y = x; z = a – y ; }", 
"If (x < 0) { a = b * 2; y = x; z = a – y; }", 
"If (x < 0) { a = b * 2; y = x; z = a – y; }"]//answer is last choice
var question2 = ["Kim has just constructed her first for loop within the Java language.  Which of the following is not a required part of a for loop?", 
"Initialization", 
"Condition", 
") increment",  
"Variable"]

startButton.addEventListener('click', startTest)


function startTimer() {
    var timer = setInterval(myTimer, 1000);
    var startTime = 60;

    function myTimer() {
        time.innerHTML= --startTime;
        if (startTime == 0) { 
            clearInterval(timer);
        }
       
    }
}
 

function startTest() {
    startTimer();
    startScreen.classList.add('hide');
    startScreenText.classList.add('hide');
    startButton.classList.add('hide');
    question.classList.remove('hide');
    answerChoices.classList.remove('hide');
    question.innerHTML = question1[0]
    answerChoiceA.innerHTML = question1[1]
    answerChoiceB.innerHTML = question1[2]
    answerChoiceC.innerHTML = question1[3]
    answerChoiceD.innerHTML = question1[4]

    answerChoiceA.addEventListener('click', wrongAnswer)
    answerChoiceB.addEventListener('click', wrongAnswer)
    answerChoiceC.addEventListener('click', wrongAnswer)
    answerChoiceD.addEventListener('click', rightAnswer)

    var correctAnswer = 0;
    var incorrectAnswer = 0;

   function rightAnswer() {
       ++correctAnswer;
       console.log('correctAnswer');
       nextQuestion()
       
       
    }

    function wrongAnswer() {
        ++incorrectAnswer;
        console.log('incorrectAnswer')
        nextQuestion()

    }

    function nextQuestion() {
        question.innerHTML = question2[0]
        answerChoiceA.innerHTML = question2[1]
        answerChoiceB.innerHTML = question2[2]
        answerChoiceC.innerHTML = question2[3]
        answerChoiceD.innerHTML = question2[4]

    }

}

