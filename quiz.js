// the list of functions below and if statements are something i looked up online to understand piece by piece before applting them into my code.
// "this" is still confusing 
// sets up the score and the questions showing the text, choices, and questions.
// as well as letting the code know what the correct answer is when selected for the question

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
 

// shows the scores, questions, and options for the questions by creating if/else statements with a for loop to cycle 
// through the choices for each question.
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        const element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        const choices = quiz.getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++) {
            const element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    const button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 // progression through the number of questions for the quiz with a function to help present that 
 // same for showing the score

function showProgress() {
    const currentQuestionNumber = quiz.questionIndex + 1;
    const element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    const gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// questions are listed here with the arrays for choices and the correct answer for those questions.
// saw many variations to do this either through html and do it by spanning them
// or listing the questions together with a variable and arrays
const questions = [
    new Question("What does HTML stand for?", ["Hyper Team Monkey Life", "Holy Text Money Lore", "Horsey Tongue Markup Laundry", "Hyper Text Markup Language"], "Hyper Text Markup Language"),
    new Question("What does CSS stand for?", ["Cars Standing Still", "Computers Shall Serve", "Community Services School", "Cascading Style Sheets"], "Cascading Style Sheets"),
    new Question("Arrays in JavaScript can be used to store ____.", ["numbers and strings", "other arrays", "booleans", "all of the above"], "all of the above"),
    new Question("String values must be enclosed within ____ when being assigned to variables.", ["commas", "curly brackets", "quotes", "parentheses"], "quotes"),
    new Question("A very useful tool used during development and debugging for printing content to the debugger is:", ["JavaScript", "terminal / bash", "for loops", "console.log"], "console.log")
];
 
// create quiz
const quiz = new Quiz(questions);
 
// display quiz
populate();

// found this online hoping it would give me some sort of hints on tying my timer in with my list of choices then having it give my chosen wrpng answer be 
// reduced with the -5 time

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

