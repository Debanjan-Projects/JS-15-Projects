// we have to set the question 

const questions = [
    {
        question: "which is the large animal in the worls?",
        answer:[
            { text:"Shark", correct:false },
            { text:"Bluse Whale", correct:true },
            { text:"ELephant", correct:false },
            { text:"Giraffe", correct:false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answer: [
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Seoul", correct: false },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answer: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answer: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Leo Tolstoy", correct: false }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer: [
            { text: "Australia", correct: true },
            { text: "Europe", correct: false },
            { text: "Antarctica", correct: false },
            { text: "South America", correct: false }
        ]
    },
    {
        question: "How many colors are there in a rainbow?",
        answer: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "What is the national game of India?",
        answer: [
            { text: "Cricket", correct: false },
            { text: "Hockey", correct: true },
            { text: "Kabaddi", correct: false },
            { text: "Football", correct: false }
        ]
    },
    {
        question: "Which organ purifies our blood?",
        answer: [
            { text: "Heart", correct: false },
            { text: "Lungs", correct: false },
            { text: "Kidney", correct: true },
            { text: "Liver", correct: false }
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answer: [
            { text: "Amazon River", correct: false },
            { text: "Nile River", correct: true },
            { text: "Yangtze River", correct: false },
            { text: "Ganga River", correct: false }
        ]
    },
    {
        question: "Who was the first man to step on the Moon?",
        answer: [
            { text: "Yuri Gagarin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Buzz Aldrin", correct: false },
            { text: "Michael Collins", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    // ❌ BUG FIXED: changed "question" → "questions"
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;

        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    // ❌ BUG FIXED: changed "question.length" → "questions.length"
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    // ❌ BUG FIXED: changed "question.length" → "questions.length"
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
