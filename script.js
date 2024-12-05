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

