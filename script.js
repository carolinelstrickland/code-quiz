let startButton = document.getElementById("start-btn");
let timeLeft = document.getElementById("time-left");
let questionCountainerEl = document.getElementById("question-container");
let seconds = "Time Left : " + 75;
let questionsEl = document.getElementById("questions");
let answerButtonsEl = document.getElementById("answer-buttons");
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Started");
    startButton.classList.add("hide");
    timeLeft.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    timeLeft.textContent = seconds;
    questionCountainerEl.classList.remove("hide");
    setNextQuestion()
}

function setNextQuestion() {
    resetQuestion()
    displayQuestion(shuffledQuestions[currentQuestionIndex]);
}

function displayQuestion(question) {
    questionsEl.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsEl.appendChild(button);
    })
}

function resetQuestion() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer(e) {
    const grabSelection = e.target;
    const correct = chosenButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsEl.children).forEach(buttons => {
        setStatusClass(button, button.dataset.correct)
    })
}

let questions = [
    {
        question: "Who is not a member of The Beatles?",
        answers: [
            {text: "Ringo Starr", correct: false },
            {text: "Mick Jagger", correct: true },
            {text: "George Harrison", correct: false },
            {text: "Paul McCartney", correct: false},
        ]
    },
    {
        question: "Which artist belongs to the Post-Impressionist movement?",
        answers: [
            {text: "Georges Seurat", correct: true},
            {text: "Jan van Eyck", correct: false},
            {text: "Johannes Vermeer", correct: false},
            {text: "Pierre-Auguste Renoir", correct: false},
        ]
    },
    {
        question: "Which of the following jazz musicians is not a trumpeteer?",
        answers: [
            {text: "Louis Armstrong", correct: false},
            {text: "Miles Davis", correct: false},
            {text: "Dizzy Gillespie", correct: false},
            {text: "Charlie Parker", correct: true},
        ]
    },
    {
        question: ""
    }
]


