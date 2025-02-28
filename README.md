﻿# Adv-Todo-App

 
This is a feature-rich task management application built with React, Redux, and Vite. It offers functionalities like user authentication, task prioritization, and weather integration, while ensuring a fully responsive design for mobile, tablet, and desktop devices.

Features
User Authentication: Login functionality to manage user sessions.
Task Management: Add, delete, and prioritize tasks.
Weather Integration: Fetch real-time weather data using OpenWeatherMap API.
Responsive Design: Mobile-first design using CSS Grid and Flexbox.
State Management: Powered by Redux Toolkit with support for asynchronous actions.
Installation and Setup
Prerequisites
Node.js (v14 or above)
npm (v6 or above)
Steps to Run the Project

1. Clone the repository:
git clone https://github.com/your-repo/advanced-todo-app.git

2. Navigate to the project directory:

cd advanced-todo-app

3. Install dependencies:

npm install

4. Add your OpenWeatherMap API key:

Open src/store/taskSlice.js.
Replace YOUR_API_KEY with your OpenWeatherMap API key.


5. Start the development server:

npm run dev

6. Open the application in your browser:

The app should be running at http://localhost:5173.

Technologies Used:

Frontend: React, React Router, Redux Toolkit
State Management: Redux Toolkit with Thunks

HTTP Client: Axios
Build Tool: Vite

CSS: Flexbox, CSS Grid, Media Queries
API: OpenWeatherMap API

Available Scripts
npm run dev: Start the development server.
npm run build: Build the project for production.
npm run preview: Preview the production build.

Responsive Design
Mobile-First Approach: Optimized for small screens first, and progressively enhanced for larger devices.
CSS Techniques: Utilizes CSS Grid and Flexbox for layout and responsiveness.

Future Enhancements
Add user registration and password recovery features.
Implement task filtering and search functionality.
Add persistent state storage using local storage or a backend database.


License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
OpenWeatherMap API for weather data.
Vite for a fast and efficient development setup.
