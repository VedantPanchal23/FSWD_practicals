# Practical 5: Signup Form with Validation & LocalStorage

[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4+-purple.svg)](https://vitejs.dev/)

A signup form with client-side validation and data persistence using LocalStorage.

## 📖 Objective

Create a signup form that validates user input and stores the data locally using the Web Storage API.

## 🎯 Key Concepts

- Form validation (required fields, email format, password strength)
- LocalStorage API for data persistence
- Error handling and user feedback
- Controlled components in React

## ✨ Features

- Name, email, and password fields
- Client-side validation with error messages
- Password confirmation
- Data persistence in LocalStorage
- Form submission handling
- Responsive design

## 📁 Project Structure

```
practical5/
├── public/
│   └── vite.svg
├── src/
│   ├── SignupForm.jsx
│   ├── SignupForm.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛠 Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **LocalStorage** - Web Storage API
- **CSS** - Styling

## 🚀 Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd practical5
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:** `http://localhost:5173`

## 📖 Usage

- Fill in all required fields
- Ensure password meets requirements (minimum length, etc.)
- Confirm password matches
- Click "Sign Up" to submit
- Data will be stored in browser's LocalStorage

## 🤝 Contributing

Feel free to submit issues and enhancement requests.