# Practical 8: Express POST Requests with EJS

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4+-black.svg)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/EJS-3+-orange.svg)](https://ejs.co/)

An Express application that handles form submissions and renders dynamic content using EJS templates.

## 📖 Objective

Build a server that serves an HTML form, processes POST requests, and displays results using server-side rendering with EJS.

## 🎯 Key Concepts

- POST request handling
- Form data parsing with body-parser
- Template engines (EJS)
- Server-side rendering
- Dynamic content rendering

## ✨ Features

- HTML form for user input
- POST request processing
- Dynamic result display
- EJS template rendering
- Form validation

## 📁 Project Structure

```
practical8/
├── app.js
├── package.json
├── public/
│   └── stylesheets/
│       └── style.css
├── routes/
│   ├── index.js
│   └── users.js
├── views/
│   ├── form.ejs
│   └── result.ejs
└── README.md
```

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **EJS** - Template engine
- **Body-parser** - Request body parsing

## 🚀 Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd practical8
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node app.js
   ```

4. **Open your browser and visit:** `http://localhost:3000`

## 📖 Usage

- Fill out the form on the home page
- Submit the form
- View the processed results on the result page

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display form |
| POST | `/submit` | Process form data and show result |

## 🤝 Contributing

Feel free to submit issues and enhancement requests.