"use strict";

const quizData = [
  {
    question: "What do you call a programmer who doesn't comment their code?",
    a: "Lazy",
    b: "Crazy",
    c: "Insane",
    d: "Difficult to maintain",
    correct: "d",
  },
  {
    question: "Why do programmers prefer dark mode?",
    a: "It's easier on the eyes",
    b: "It looks cool",
    c: "It saves battery",
    d: "It's a personal preference",
    correct: "a",
  },
  {
    question: "What's the most used language in web development?",
    a: "Java",
    b: "Python",
    c: "PHP",
    d: "JavaScript",
    correct: "d",
  },
  {
    question:
      "What's the difference between a programmer and a software engineer?",
    a: "There's no difference",
    b: "A software engineer is a programmer who writes documentation",
    c: "A programmer is someone who makes code work, while a software engineer is someone who makes code maintainable",
    d: "A software engineer is someone who manages programmers",
    correct: "c",
  },
  {
    question: "Why do programmers always mix up Halloween and Christmas?",
    a: "Because Oct 31 equals Dec 25 in hexadecimal",
    b: "Because they don't care about holidays",
    c: "Because they hate Christmas",
    d: "Because they love Halloween",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".quiz-container__radio-input");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const errorMessageEl = document.getElementById("error-message");
const resultMessageEl = document.getElementById("result-message");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  if (currentQuiz < quizData.length) {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    submitBtn.style.display = "block";
    resetBtn.style.display = "none";
  } else {
    resultMessageEl.innerText = `
      Wow, ${score}/${quizData.length} correct answers on the quiz! Looks like you're on your way to becoming the next Bill Gates... or maybe just his assistant. Keep coding!`;
    resultMessageEl.style.color = "red";
    resultMessageEl.style.fontWeight = "bold";

    submitBtn.style.display = "none";
    resetBtn.style.display = "block";
  }
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function showErrorMessage() {
  errorMessageEl.innerText = "Please select an answer.";
  errorMessageEl.style.color = "red";
  errorMessageEl.style.fontWeight = "bold";
}

function hideErrorMessage() {
  errorMessageEl.innerText = "";
}

function checkAnswer() {
  const answer = getSelected();

  if (!answer) {
    showErrorMessage();
  } else {
    hideErrorMessage();
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    loadQuiz();
  }
}

function resetQuiz() {
  currentQuiz = 0;
  score = 0;
  loadQuiz();
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkAnswer();
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetQuiz();
  resultMessageEl.innerText = "";
});
