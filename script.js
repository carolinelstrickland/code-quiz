let startButton = document.getElementById("start-btn");
let submitButton = document.getElementById("submit-btn");
let nameContainerEl = document.getElementById("score-container");
let timeLeft = document.getElementById("time-left");
let highscoreContainerEl = document.getElementById("total-score");
let questionCountainerEl = document.getElementById("question-container");
let seconds = 45;
let questionsEl = document.getElementById("questions");
let answerButtonsEl = document.getElementById("answer-buttons");
const btnA = document.getElementById("btn-a")
const btnB = document.getElementById("btn-b")
const btnC = document.getElementById("btn-c")
const btnD = document.getElementById("btn-d")
let userAnswer = "";
let correctAnswer = "";
let currentQuestionIndex = 0;
let wrongAnswers = 0;
let rightAnswers = 0;
let interval
let scores

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startButton.classList.add("hide");
    timeLeft.classList.remove("hide");
    questionCountainerEl.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionCountainerEl.classList.remove("hide"); 
    startTimer();
    askQuestions();
};

function startTimer() {
    interval = setInterval(() => {
        timeLeft.textContent = seconds;
    if (seconds < 0) {
        clearInterval(interval)

    }
    else {
        seconds--
    }
    }, 1000);
};

function checkAnswer() {
    if (userAnswer === correctAnswer) {
        rightAnswers++
        console.log("Right answer")
        console.log(rightAnswers)
    }
    else {
        wrongAnswers++
        console.log("Wrong answer")
        console.log(wrongAnswers)
        seconds-=15;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        clearInterval(interval);
        endGame();
    } else {
    askQuestions();
    } 
    if (timeLeft === 0) {
        endGame();
    }
};

function addEvent(e) {
e.preventDefault()
userAnswer = e.target.textContent;
checkAnswer();
};

function askQuestions() {
    console.log(currentQuestionIndex);
    if (currentQuestionIndex < questions.length) {
        correctAnswer = questions[currentQuestionIndex].answer;
        questionsEl.textContent = questions[currentQuestionIndex].question;
        btnA.textContent = questions[currentQuestionIndex].answers[0];
        btnB.textContent = questions[currentQuestionIndex].answers[1];
        btnC.textContent = questions[currentQuestionIndex].answers[2];
        btnD.textContent = questions[currentQuestionIndex].answers[3];
    }
    else {console.log("Game Over")};
};

btnA.addEventListener("click", addEvent);
btnB.addEventListener("click", addEvent);
btnC.addEventListener("click", addEvent);
btnD.addEventListener("click", addEvent);

function endGame() {
    questionCountainerEl.classList.add("hide");
    submitButton.classList.add("hide");
    nameContainerEl.classList.remove("hide");
    highscoreContainerEl.classList.remove("hide");
}

function highscore() {
    let scorerName = document.getElementById("name");
    let pastScores = localStorage.getItem("scores");
    if (pastScores) {
        scores = JSON.parse(pastScores);
    } else scores = [];
    scores.push({name: scorerName, score: currentScore});
    localStorage.setItem("scores", JSON.stringify(scores));
    let highscoreLog = document.getElementById("highest-scorers");
    highscoreLog.innerHTML = "";
    for (let prop of scores) {
        highscoreLog.innerHTML += "<li>" + propr.name + "" + prop.score + "</li>";
        console.log(prop);
    }
    highscoreContainerEl.style.display = "none";
    totalCon.style.display = "block";
}





let questions = [
    {
        question: "Who is not a member of The Beatles?",
        answers: ["Ringo Starr", "Mick Jagger", "George Harrison", "Paul McCartney"],
        answer: "Mick Jagger"
    },
    {
        question: "Which artist belongs to the Post-Impressionist movement?",
        answers: ["Georges Seurat","Jan van Eyck", "Johannes Vermeer","Pierre-Auguste Renoir"],
        answer: "Georges Seurat"
    },
    {
        question: "Which of the following jazz musicians is not a trumpeteer?",
        answers: ["Louis Armstrong", "Miles Davis", "Dizzy Gillespie", "Charlie Parker"],
        answer: "Charlie Parker"
    },
    {
        question: "What is the tallest sculpture in the world?",
        answers: ["Peter the Great Statue - Moscow, Russia", "Christ the Redeemer - Rio de Janeiro, Brazil", "Statue of Liberty - Manhattan, NY, USA", "Statue of Unity - Gujarat, India"],
        answer: "Statue of Unity - Gujarat, India"
    },
];


