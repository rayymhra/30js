const questions = [
    {
        question: "Which is the largest anmal in the world",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Girrafe", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antartica", correct: true},
        ]
    },
    {
        question: "Which is the smalest country in the world",
        answers: [
            { text: "Vatican", correct: true},
            { text: "London", correct: false},
            { text: "Nepal", correct: false},
            { text: "Sri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world",
        answers: [
            { text: "Asia", correct: false},
            { text: "Aunstralia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){  // fungsi buat nentuin nilai/kondisi awal dari quiz
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"; // bcs at the end we'll change the text to "restart"
    showQuestion();
}

function showQuestion(){
    resetState(); //ngehapus tulisan ans1 ans2 ans3 ans4
    let currentQuestion =  questions[currentQuestionIndex]; 
    let questionNo = currentQuestionIndex + 1; // well get the question 1 if index 0, well get the question 2 if the index is 1 and so on
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // add question number and pertanyaan nya

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        //click function
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){ //ngehapus tulisan ans1 ans2 ans3 ans4
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct"); //warna nya jadi ijo di css
        score++;
    }else{
        selectedBtn.classList.add("incorrect"); // warnanya jadi merah di css
    }

    Array.from(answerButtons.children).forEach(button => { //for each button it wil check the dataset
        if(button.dataset.correct === "true"){  // if it's true it will add the class name correct, if we selected the wrong answer, it will go and check the other answer and if it's true then it will add the green color whith the class name correct
            button.classList.add("correct");
        }
        button.disabled = true; // it will disable the button so you can only click once
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;;
    nextButton.innerHTML= "play again"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion(); //if there is another question it will display another question else it will display the score
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz(); // if there is no question and we click on that button so it will restart the quiz
    }
})


startQuiz();