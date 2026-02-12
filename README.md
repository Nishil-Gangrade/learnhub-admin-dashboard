📘 LearnHub – Admin Dashboard with Analytics & Reporting
📌 Project Overview

LearnHub Admin Dashboard is a full-stack web application built using the MEAN stack to help administrators monitor learners, courses, and performance analytics in an enterprise learning environment.

The dashboard provides visual insights through charts, secure authentication, and admin-level controls similar to real-world CRM and analytics platforms.

🧱 Tech Stack
Frontend

Angular 21 (Standalone Components)

Tailwind CSS (UI & Glassmorphism design)

Chart.js (Data visualization)

TypeScript

Backend

Node.js 22

Express.js

MongoDB Atlas

JWT Authentication

bcryptjs (Password hashing)

✨ Key Features

🔐 Secure Admin Login with JWT authentication

🛡️ Role-based route protection using Angular Guards

📊 Analytics Dashboard with animated charts

📈 Learner growth & course completion insights

👥 User management interface

📚 Course management interface

📑 Reports & analytics page

🎨 Responsive glassmorphism UI design

☁️ MongoDB Atlas cloud database

📊 Analytics & Charts

Line Chart – Learner Growth Over Time

Bar Chart – Course Completion Rates

Progress Indicators – Skills performance

Activity Feed – Recent learner actions

(Charts currently use mock data for demo purposes but are API-ready.)

🔑 Demo Login Credentials
Email: admin@test.com
Password: 123456

🗂️ Project Structure
learnhub-admin/
│
├── frontend/        # Angular frontend
│   ├── src/
│   ├── angular.json
│   └── package.json
│
├── backend/         # Node + Express backend
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── package.json
│
└── README.md

⚙️ Local Setup Instructions
🔧 Prerequisites

Make sure you have the following installed:

Node.js v22+

npm v11+

Angular CLI v21

MongoDB Atlas account (or local MongoDB)

▶️ Backend Setup
cd backend
npm install
node server.js


Backend will run on:

http://localhost:5000

▶️ Frontend Setup
cd frontend
npm install
ng serve


Frontend will run on:

http://localhost:4200

🌐 Environment Configuration

Create a .env file in the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

🧪 Notes

Authentication is protected using JWT and Angular route guards.

Charts are implemented using Chart.js with animations.

The project focuses on structure, UI, and real-world relevance as per assignment scope.


📩 Submission Notes

This project is submitted as part of the First Round Assignment for the Admin Dashboard role.

The application demonstrates:

Full-stack MEAN development

Secure authentication

Dashboard analytics

Clean and responsive UI

Real-world admin panel design

👤 Author

Nishil Gangrade
B.Tech Computer Science Engineering
