const questions = [
  {
      question: "Commonly used data types DO NOT include:",
      choices: ["Strings", "Booleans", "Alerts", "Numbers"],
      correctAnswer: "Alerts"
  },
  {
      question: "The condition in an if/else statement is enclosed within ___.",
      choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
      correctAnswer: "Parenthesis"
  },
  {
        question: "Arrays in JavaScript can be used to store ___.",
        choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
        correctAnswer: "All of the above"
  },
  {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        correctAnswer: "Quotes"
  },
  {
        question: "A very useful tools used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Terminal/Bash", "For loops", "console.log"],
        correctAnswer: "console.log"
  },
];

const quizEl = document.querySelector(".quiz")
const questEl = document.getElementById("questions");
const choices = document.getElementById("choices");
const startBtn = document.getElementById("begin");
const results = document.getElementById("result");
var nameEl = document.getElementById("name");

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", function() {
      nameEl.style.display = "none";
      questEl.style.display = "block";
      questEl.style.alignSelf = "center";
      choices.style.display = "flex";
      displayQuestion(currentQuestion);

  });
  function displayQuestion(questionIndex) {
      if (questionIndex < questions.length) {
        const questionData = questions[questionIndex];
        questEl.innerHTML = `<p>${questionData.question}</p>`;
    

    //     questionData.choices.forEach((choice, index) => {
    //       const choiceElement = document.createElement("label");
    //       choiceElement.innerHTML = `
    //         <input type="radio" name="answer" value="${choices}">
    //         ${choices}
    //       `;
    //       choicesContainer.appendChild(choices);
    
    //       choices.querySelector("input").addEventListener("click", function() {
    //         checkAnswer(choice, questionData.correctAnswer);
    //       });
    //     });
    //   } else {
    //     displayResult();
      }
    }
    
    // function checkAnswer(selectedChoice, correctAnswer) {
    //   if (selectedChoice === correctAnswer) {
    //     score++;
    //   }
    
    //   currentQuestion++;
    //   displayQuestion(currentQuestion);
    // }
    
    // function displayResult() {
    //   questEl.style.display = "none";
    //   choicesContainer.style.display = "none";
    //   results.style.display = "block";
    //   results.innerHTML = `You scored ${score} out of ${questions.length} questions.`;
    // }

    
    
    
    
    
    
