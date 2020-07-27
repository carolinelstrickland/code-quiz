let startButton = document.getElementById("start-btn");
let timeLeft = document.getElementById("time-left");
let questionCountainerEl = document.getElementById("question-container");
let seconds = 75;
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

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Started");
    startButton.classList.add("hide");
    timeLeft.classList.remove("hide");
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
        seconds-=10;
    }
    currentQuestionIndex++
    askQuestions();
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


