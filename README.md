# MallikaKapoor-041130241-capstone_part-4
# Quiz App Project

## Project Overview
This project is a web-based Quiz App built using HTML, CSS, and JavaScript. It allows users to select a quiz category and difficulty level and take a quiz. The app fetches quiz questions from an API and provides an interactive interface for users to answer the questions and track their performance.

---

## Features

### Core Features
- **Category Selection**: Users can choose from a range of quiz categories, including Linux, Docker, WordPress, SQL, Laravel, and Bash.
- **Difficulty Levels**: Three levels of difficulty are available: Easy, Medium, and Hard.
- **Interactive Quiz**: Questions are displayed dynamically, and users can select answers.
- **Performance Tracking**: The app tracks and displays the number of correct and incorrect answers.
- **Persistent Statistics**: User performance stats are saved in local storage and persist across sessions.
- **Reset Stats**: Users can reset their performance statistics to start fresh.

### Design Features
- **Responsive Design**: Ensures the app looks and works great on all devices.
- **Accessible UI**: Uses clear and readable fonts, intuitive button placements, and contrasting colors for accessibility.
- **Dynamic Styling**: Hover and click effects on buttons and options enhance interactivity.

---

## Files

### HTML (`index.html`)
- Defines the structure of the Quiz App, including the header, main quiz area, category and difficulty selection forms, and footer.
- Includes placeholders for dynamically generated questions and answers.

### CSS (`style.css`)
- Provides styling for the app, including layout, typography, colors, and button styles.
- Implements hover and active states for buttons and dropdowns for a better user experience.
- Uses a background image and thematic colors to align with the Quiz App’s branding.

### JavaScript (`script.js`)
- Implements the app's functionality:
  - Fetches questions from the Quiz API using the selected category and difficulty.
  - Dynamically displays questions and answer options.
  - Tracks and updates user performance stats.
  - Handles local storage for saving and retrieving performance statistics.
  - Provides a reset functionality for clearing stats.

---

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **API**: [QuizAPI](https://quizapi.io/) for fetching quiz questions
- **Local Storage**: To save user performance stats persistently.

---

## How to Use the App
1. Open the app in a web browser.
2. Select a quiz category and difficulty level.
3. Click the **Start Quiz** button to begin.
4. Answer the questions displayed in the quiz container.
5. Check your performance stats in the statistics section.
6. Use the **Reset Stats** button to clear your performance records if needed.

---

## Project Setup
1. Clone the repository.
2. Ensure all the files (`index.html`, `style.css`, `script.js`) and assets (e.g., background image, logo) are in the same directory.
3. Open the `index.html` file in a web browser to run the app.

---

## Challenges Faced

### 1. API Integration
- **Challenge**: Fetching questions dynamically and managing API errors.
- **Solution**: Utilized asynchronous JavaScript (`async/await`) for seamless API calls and added error handling to ensure the app remains functional even if the API fails.

### 2. Responsive Design
- **Challenge**: Ensuring the app is usable and visually appealing on all devices.
- **Solution**: Used flexbox and responsive CSS units to create a scalable layout adaptable to various screen sizes.

### 3. Data Persistence
- **Challenge**: Retaining user stats across browser sessions.
- **Solution**: Implemented local storage to save and retrieve user performance data, ensuring stats persist even after a page reload.

### 4. User Experience
- **Challenge**: Designing an intuitive and engaging interface.
- **Solution**: Incorporated dynamic styles and interactive elements, like hover effects and animations, to enhance usability and engagement.

---

## Future Enhancements
- **Add More Categories**: Include additional quiz categories for broader user engagement.
- **Timer Feature**: Implement a countdown timer for each question to increase challenge.
- **Leaderboard**: Add a feature to display user scores on a global leaderboard.
- **User Authentication**: Allow users to save and retrieve stats across devices through login.

---

## Credits
- **Developer**: Mallika Kapoor
- **API**: [QuizAPI](https://quizapi.io/)
- **Fonts**: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
