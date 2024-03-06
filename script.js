let questionIndex = -1;
let correctAnswers = 0;

const questionText = document.querySelector("#questionText");
const button1 = document.querySelector("#answer1");
const button2 = document.querySelector("#answer2");
const button3 = document.querySelector("#answer3");
const button4 = document.querySelector("#answer4");

const question = document.querySelector("#question")

const questions = [
    {
        head: "Question 1",
        text: "Which function is used to write a string to the terminal in JavaScript?",
        buttonText: ["print", "console.log", "write", "cout"],
        buttonFucntions: [answerWrong, answerCorrect, answerWrong, answerWrong]
    },
    
    {
        head: "Question 2",
        text: "What is the correct syntax for the condition of a 'while' loop in Python? The loop should run as long as x is true.",
        buttonText: ["while x:", "while x,", "as long as x:", "while (x) {"],
        buttonFucntions: [answerCorrect, answerWrong, answerWrong, answerWrong]
    },
    
    {
        head: "Question 3",
        text: "Which of the following programming languages is typically used for the devolopment of web applications, alongside HTML and CSS?",
        buttonText: ["C++", "Swift", "R", "JavaScript"],
        buttonFucntions: [answerWrong, answerWrong, answerWrong, answerCorrect]
    },

    {
        head: "Question 4",
        text: "Which of the following languages does NOT have the ability to manipulate data and perform logical operations?",
        buttonText: ["C#", "Python", "Java", "HTML"],
        buttonFucntions: [answerWrong, answerWrong, answerWrong, answerCorrect]
    },

    {
        head: "Question 5",
        text: "What is the correct syntax for running a block of code only if x is true in C++",
        buttonText: ["if x is true:", "if x:", "if (x) {", "only if x:"],
        buttonFucntions: [answerWrong, answerWrong, answerCorrect, answerWrong]
    }       
];

button1.onclick = answerWrong;
button2.onclick = answerWrong;
button3.onclick = answerWrong;
button4.onclick = answerWrong;

function update(question) {
    questionHead.innerText = question.head;
    questionText.innerText = question.text;
    button1.innerText = question.buttonText[0];
    button2.innerText = question.buttonText[1];
    button3.innerText = question.buttonText[2];
    button4.innerText = question.buttonText[3];
    button1.onclick = question.buttonFucntions[0];
    button2.onclick = question.buttonFucntions[1];
    button3.onclick = question.buttonFucntions[2];
    button4.onclick = question.buttonFucntions[3];

}

function answerCorrect() {
    correctAnswers += 1;
    questionIndex += 1;
    
    if (questionIndex <= 4) {
        update(questions[questionIndex]);
    }
    else {
        displayResults();
    }
}

function answerWrong() {
    questionIndex += 1;

    if (questionIndex <= 4) {
        update(questions[questionIndex]);
    }
    else {
        displayResults();
    }
}

function displayResults() {
    questionHead.innerText = "You got " + correctAnswers + "/5 questions correct."

    if (correctAnswers < 3) {
        questionText.innerText = "Your fundamental programming knowledge could use some work. Hit the books and try again later!"
    }
    else if (correctAnswers < 5) {
        questionText.innerText = "That's pretty good! But do you think you can do even better?"
    }
    else {
        questionText.innerText = "All questions correct! You are AMAZING at this!"
    }

    button1.innerText = "Retry";
    button2.innerText = "Retry";
    button3.innerText = "Retry";
    button4.innerText = "Retry";
    button1.onclick = restart;
    button2.onclick = restart;
    button3.onclick = restart;
    button4.onclick = restart; 
}

function restart() {
    questionIndex = 0;
    correctAnswers = 0;
    update(questions[questionIndex]);
}
