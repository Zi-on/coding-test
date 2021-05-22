var startButton = document.getElementById('start');
var startScreen = document.getElementById('startScreen');
var startScreenText = document.getElementById('startScreenText')
var question = document.getElementById('question')
var answerChoices = document.getElementById('answerChoices')

var question1 = ["Of the following, if statements, which one correctly executes three instructions if the condition is true?", 
"If (x < 0) a = b * 2; y = x; z = a – y;", "{ if (x < 0) a = b * 2; y = x; z = a – y; }", "If{ (x < 0) a = b * 2; y = x; z = a – y ; }", 
"If (x < 0) { a = b * 2; y = x; z = a – y; }"] //answer is last choice

startButton.addEventListener('click', startTest)

function startTimer() {

}

function startTest() {
    startScreen.classList.add('hide');
    startScreenText.classList.add('hide');
    startButton.classList.add('hide');
    question.classList.remove('hide');
    answerChoices.classList.remove('hide');
}
