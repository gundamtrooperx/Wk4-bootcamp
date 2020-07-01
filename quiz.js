function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("What does HTML stand for?", ["Hyper Team Monkey Life", "Holy Text Money Lore", "Horsey Tongue Markup Laundry", "Hyper Text Markup Language"], "Hyper Text Markup Language"),
    new Question("What does CSS stand for?", ["Cars Standing Still", "Computers Shall Serve", "Community Services School", "Cascading Style Sheets"], "Cascading Style Sheets"),
    new Question("Arrays in JavaScript can be used to store ____.", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above"),
    new Question("String values must be enclosed within ____ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parentheses"], "quotes"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript", "terminal / bash", "for loops", "console.log"], "console.log")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();

(function() {
    var sec = 100;
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timer').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function() {
        sec -= 5;
        document.getElementById('timer').innerHTML='00:'+sec;
    });
    startTimer();
})();

