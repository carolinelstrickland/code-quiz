let startButton = document.getElementById("start-btn");
let timeLeft = document.getElementById("time-left");
let questionCountainerEl = document.getElementById("question-container");
let seconds = 75;
let questionsEl = document.getElementById("questions");
let answersEl = document.getElementById("answer-buttons");



startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Started");
    startButton.classList.add("hide");
    timeLeft.classList.remove("hide");
    questionCountainerEl.classList.remove("hide");
    asQuestion()
}

function askQuestion() {

}

var questions = 


