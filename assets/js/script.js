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
"If (x < 0) { a = b * 2; y = x; z = a – y; }"] //answer is last choice

startButton.addEventListener('click', startTest)

function startTimer() {
    var timer = setInterval(myTimer, 1000);
    var startTime = 60;

    function myTimer() {
        time.innerHTML= --startTime;
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
}
