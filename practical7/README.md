# Practical 7: Basic Express Server & Routing

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4+-black.svg)](https://expressjs.com/)

A basic Express.js server demonstrating routing and different response types.

## 📖 Objective

Set up a backend server with multiple routes that return different types of responses, introducing server-side JavaScript and HTTP routing.

## 🎯 Key Concepts

- Server-side JavaScript with Node.js
- Express.js framework setup
- HTTP routing and methods
- JSON and text responses
- Server listening on ports

## ✨ Features

- Home route (/) with welcome message
- About route (/about) with information
- API route (/api/user) returning JSON data
- Proper error handling

## 📁 Project Structure

```
practical7/
├── server.js
├── package.json
└── README.md
```

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework

## 🚀 Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd practical7
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node server.js
   ```

4. **Test the endpoints:**
   - Home: `http://localhost:3000/`
   - About: `http://localhost:3000/about`
   - API: `http://localhost:3000/api/user`

## 📡 API Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/` | Home page | Text: "Welcome to Express Server" |
| GET | `/about` | About page | Text: "This is the about page" |
| GET | `/api/user` | User data | JSON: `{"name": "John Doe", "age": 30}` |

## 🤝 Contributing

Feel free to submit issues and enhancement requests.