// Array of questions and their corresponding correct answers
// CAUTION: Only use lowercase letters in the correct answers!
const questions = [
  {
    sentence: "Which type of engine is commonly used in modern automobiles?",
    correctAnswers: ["Diesel Engine", "diesel engine", "DIESEL ENGINE", "dieselengine", "diesel", "Diesel", "DIESEL"],
  },
  {
    sentence: "What is the SI unit of electric current?",
    correctAnswers: ["Ampere", "ampere",],
  },
  {
    sentence: "Which programming language is often used for developing Android applications?",
    correctAnswers: ["JAVA", "java", "Java"],
  },
  {
    sentence: "Which element is commonly used as a semiconductor in electronic devices?",
    correctAnswers: ["Silicon", "silicon", "SILICON"],
  },
  {
    sentence: "What is the chemical formula for water?",
    correctAnswers: ["H2O", "h2o", "H2o", "h2O"],
  },
];

// Function to set a random question
function setRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  document.getElementById("sentence").textContent = randomQuestion.sentence;
  document.getElementById("feedback").textContent = "";
  // Store correct answers for later checking
  document
    .getElementById("sentence")
    .setAttribute(
      "data-correct-answers",
      randomQuestion.correctAnswers.join(",")
    );
}

// Function to check user's answer
function checkAnswer() {
  const userAnswer = document
    .getElementById("user-answer")
    .value.toLowerCase()
    .trim();
  const correctAnswers = document
    .getElementById("sentence")
    .getAttribute("data-correct-answers")
    .split(",");
  if (correctAnswers.includes(userAnswer)) {
    alert(SUCCESS_MESSAGE);
  } else {
    document.getElementById("feedback").textContent = "Incorrect. Try again.";
  }
}

// Set initial question when the page loads
setRandomQuestion();
