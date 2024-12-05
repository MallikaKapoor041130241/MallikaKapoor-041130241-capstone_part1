// Questions and answers object
const questions = {
    python: {
        question: "What keyword is used to define a function in Python?",
        options: ["def", "func", "define", "lambda"],
        correctAnswer: "def"
    },
    docker: {
        question: "Which command is used to list Docker containers?",
        options: ["docker ps", "docker list", "docker run", "docker stop"],
        correctAnswer: "docker ps"
    },
    
};


function loadQuiz(topic) {
    const questionContainer = document.querySelector(".question");
    const buttonGroup = document.querySelector(".button-group");

    
    buttonGroup.innerHTML = '';

    const quizData = questions[topic];
    questionContainer.textContent = quizData.question;

    quizData.options.forEach(option => {
        const button = document.createElement("a");
        button.className = "button";
        button.textContent = option;
        button.href = "#";
        button.onclick = (e) => checkAnswer(e, option, quizData.correctAnswer);
        buttonGroup.appendChild(button);
    });
}

// Check the answer and provide feedback
function checkAnswer(event, selectedAnswer, correctAnswer) {
    // Remove any previous feedback classes
    document.querySelectorAll(".button").forEach(btn => {
        btn.classList.remove("correct", "incorrect");
    });

    if (selectedAnswer === correctAnswer) {
        event.target.classList.add("correct");  // Green for correct answer
    } else {
        event.target.classList.add("incorrect");  // Red for incorrect answer
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get("topic") || "python";  
    loadQuiz(topic);
});
document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', function () {
        // Change button colors based on correct/incorrect answer
        if (this.dataset.answer === 'correct') {
            this.style.backgroundColor = 'green';
        } else {
            this.style.backgroundColor = 'red';
        }

        const options = document.querySelectorAll('.option');
        options.forEach(option => option.disabled = true);

        let score = 0;
        options.forEach(option => {
            if (option.dataset.answer === 'correct' && option.style.backgroundColor === 'green') {
                score++;
            }
        });

        document.getElementById('score').textContent = score;
        setTimeout(() => {
            window.location.href = 'quiz-result.html';
        }, 2000); 
    });
});
/* linux */
const options = document.querySelectorAll(".option");

options.forEach(option => {
    option.addEventListener("click", function() {
        // Check if the answer is correct or incorrect
        if (option.getAttribute("data-answer") === "correct") {
            option.classList.add("correct");
        } else {
            option.classList.add("incorrect");
        }

        options.forEach(btn => btn.disabled = true);

        setTimeout(() => {
            window.location.href = "result-linux.html";
        }, 1000);
    });
});










const apiKey = 'DP1XPEFuiDhGMF3IAGSQ3qwxo3CGFXAdSOWtj57w';
const difficultyForm = document.getElementById('difficulty-form');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const correctCount = document.getElementById('correct-count');
const incorrectCount = document.getElementById('incorrect-count');
const resetStatsButton = document.getElementById('reset-stats');

let stats = {
  correct: 0,
  incorrect: 0,
};

const updateStats = () => {
  correctCount.textContent = stats.correct;
  incorrectCount.textContent = stats.incorrect;
  localStorage.setItem('quizStats', JSON.stringify(stats));
};

const resetStats = () => {
  stats.correct = 0;
  stats.incorrect = 0;
  updateStats();
};

const loadStats = () => {
  const savedStats = localStorage.getItem('quizStats');
  if (savedStats) {
    stats = JSON.parse(savedStats);
    updateStats();
  }
};

const fetchQuestion = async (difficulty, category) => {
  try {
    const response = await fetch(
      `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=1&difficulty=${difficulty}&category=${category}`
    );
    const [questionData] = await response.json();

    displayQuestion(questionData);
  } catch (error) {
    console.error('Error fetching question:', error);
  }
};

const displayQuestion = (questionData) => {
  questionElement.textContent = questionData.question;
  answersElement.innerHTML = '';

  Object.entries(questionData.answers).forEach(([key, value]) => {
    if (value) {
      const button = document.createElement('button');
      button.textContent = value;
      button.dataset.correct = questionData.correct_answers[`${key}_correct`];
      button.addEventListener('click', checkAnswer);
      answersElement.appendChild(button);
    }
  });

  quizContainer.classList.remove('hidden');
};

const checkAnswer = (event) => {
  const isCorrect = event.target.dataset.correct === 'true';
  alert(isCorrect ? 'Correct!' : 'Incorrect.');

  if (isCorrect) {
    stats.correct++;
  } else {
    stats.incorrect++;
  }
  updateStats();
  quizContainer.classList.add('hidden');
};

difficultyForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const difficulty = document.getElementById('difficulty').value;
  const category = document.getElementById('category').value;
  fetchQuestion(difficulty, category);
});

resetStatsButton.addEventListener('click', resetStats);

loadStats();

