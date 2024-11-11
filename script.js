// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('sign-in-form');

    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Get user input
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // For prototype, we'll just log the data and navigate to intro page
            console.log(`Email: ${email}, Password: ${password}`);

            // Navigate to Introductory Page
            window.location.href = 'intro.html';
        });
    }

    // Quiz Option Clicks
    const quizOptions = document.querySelectorAll('.quiz-option');
    if (quizOptions.length > 0) {
        quizOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Store selected quiz topic (for prototype, just log it)
                const topic = option.textContent;
                console.log(`Selected Topic: ${topic}`);

                // Navigate to Difficulty Selection Page
                window.location.href = 'difficulty.html';
            });
        });
    }

    // Difficulty Option Clicks
    const difficultyOptions = document.querySelectorAll('.difficulty-option');
    if (difficultyOptions.length > 0) {
        difficultyOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Store selected difficulty (for prototype, just log it)
                const difficulty = option.textContent;
                console.log(`Selected Difficulty: ${difficulty}`);

                // Navigate to Quiz Page
                window.location.href = 'quiz.html';
            });
        });
    }

    // Start Quiz Button
    const startQuizBtn = document.querySelector('.start-quiz');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', () => {
            // For prototype, redirect to the first question or main quiz interface
            alert('Quiz Starting...');
            // Implement quiz functionality here
        });
    }
});






// Sample questions and answers (You can adjust questions based on the quiz topic)
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
    // Add more questions for each quiz topic as needed
};

// Function to load question data into the HTML
function loadQuiz(topic) {
    const questionContainer = document.querySelector(".question");
    const buttonGroup = document.querySelector(".button-group");

    // Clear existing options
    buttonGroup.innerHTML = '';

    // Populate question and options based on the selected topic
    const quizData = questions[topic];
    questionContainer.textContent = quizData.question;

    quizData.options.forEach(option => {
        const button = document.createElement("a");
        button.className = "button";
        button.textContent = option;
        button.href = "#";
        button.onclick = () => checkAnswer(option, quizData.correctAnswer);
        buttonGroup.appendChild(button);
    });
}

// Function to check if the selected answer is correct
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        alert("Correct! 🎉");
        // Navigate to a results page, if desired, or show additional feedback
    } else {
        alert("Incorrect. Try again!");
    }
}

// Initial call to load quiz topic data (assuming topic is in URL, e.g., quiz-python.html)
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get("topic") || "python"; // Default to Python if no topic is provided
    loadQuiz(topic);
});














/* right and wrong options */
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
    // Add more topics here if needed
};

// Load quiz data for selected topic
function loadQuiz(topic) {
    const questionContainer = document.querySelector(".question");
    const buttonGroup = document.querySelector(".button-group");

    // Clear any previous options
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

// Initial call to load the quiz topic data
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get("topic") || "python";  // Default to Python if no topic is provided
    loadQuiz(topic);
});
