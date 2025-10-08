# Full-Stack Web Development Practicals

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7+-green.svg)](https://www.mongodb.com/)

A comprehensive collection of 10 practical assignments designed to build proficiency in modern full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js). This repository serves as a hands-on learning resource for students and developers looking to master fundamental and advanced concepts in web development.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Practicals](#practicals)
  - [Practical 1: React Navigation Setup](#practical-1-react-navigation-setup)
  - [Practical 2: Counter Application](#practical-2-counter-application)
  - [Practical 3: Addition Calculator](#practical-3-addition-calculator)
  - [Practical 4: Todo Application](#practical-4-todo-application)
  - [Practical 5: Signup Form with Validation](#practical-5-signup-form-with-validation--localstorage)
  - [Practical 6: Fetch API Data (Product Cards)](#practical-6-fetch-api-data-product-cards)
  - [Practical 7: Basic Express Server & Routing](#practical-7-basic-express-server--routing)
  - [Practical 8: Express POST Requests with EJS](#practical-8-express-post-requests-with-ejs)
  - [Practical 9: Full CRUD with Express & MongoDB](#practical-9-full-crud-with-express--mongodb)
  - [Practical 10: Full MERN Stack CRUD Application](#practical-10-full-mern-stack-crud-application)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Learning Outcomes](#learning-outcomes)

## 📖 Overview

This repository contains 10 progressive practical assignments that start with basic React concepts and build up to a complete full-stack MERN application. Each practical is self-contained with its own directory, dependencies, and documentation, making it easy to follow along and understand the evolution of concepts.

## 📋 Prerequisites

Before running these projects, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** (for Practicals 9 & 10) - [Download here](https://www.mongodb.com/try/download/community) or use MongoDB Atlas
- **Git** - [Download here](https://git-scm.com/)

## 📁 Project Structure

```
FSWD_practicals/
├── README.md
├── practical1/          # React Navigation Setup
│   ├── src/
│   ├── package.json
│   └── ...
├── practical2/          # Counter Application
├── practical3/          # Addition Calculator
├── practical4/          # Todo Application
├── practical5/          # Signup Form
├── practical6/          # Product Cards (API)
├── practical7/          # Express Server
├── practical8/          # Express with EJS
├── practical9/          # CRUD with MongoDB
└── practical10/         # Full MERN Stack
    ├── backend/
    └── frontend/
```

## 🛠 Practicals

### Practical 1: React Navigation Setup

**Objective:** Create a basic React application with client-side routing using React Router.

**Key Concepts:** Component-based architecture, routing, navigation links.

**Technologies:** React, Vite, React Router DOM

**Location:** `practical1/`

```bash
cd practical1
npm install
npm run dev
```

### Practical 2: Counter Application

**Objective:** Build a simple counter with increment, decrement, and reset functionality.

**Key Concepts:** State management with useState hook, event handling.

**Technologies:** React, Vite

**Location:** `practical2/`

```bash
cd practical2
npm install
npm run dev
```

### Practical 3: Addition Calculator

**Objective:** Create a calculator that adds two numbers with form input handling.

**Key Concepts:** Form inputs, state management for multiple values, basic validation.

**Technologies:** React, Vite

**Location:** `practical3/`

```bash
cd practical3
npm install
npm run dev
```

### Practical 4: Todo Application

**Objective:** Develop a complete todo list application with add, complete, and delete functionality.

**Key Concepts:** Array state management, dynamic rendering, conditional styling.

**Technologies:** React, Vite

**Location:** `practical4/`

```bash
cd practical4
npm install
npm run dev
```

### Practical 5: Signup Form with Validation & LocalStorage

**Objective:** Create a signup form with client-side validation and data persistence.

**Key Concepts:** Form validation, LocalStorage API, error handling.

**Technologies:** React, Vite, Web Storage API

**Location:** `practical5/`

```bash
cd practical5
npm install
npm run dev
```

### Practical 6: Fetch API Data (Product Cards)

**Objective:** Fetch and display product data from an external API in a card layout.

**Key Concepts:** Asynchronous operations, useEffect hook, API integration, data mapping.

**Technologies:** React, Vite, Fetch API

**Location:** `practical6/`

```bash
cd practical6
npm install
npm run dev
```

### Practical 7: Basic Express Server & Routing

**Objective:** Set up a backend server with multiple routes and responses.

**Key Concepts:** Server-side JavaScript, routing, HTTP methods, JSON responses.

**Technologies:** Node.js, Express.js

**Location:** `practical7/`

```bash
cd practical7
npm install
node server.js
```

### Practical 8: Express POST Requests with EJS

**Objective:** Build a server that handles form submissions and renders dynamic content.

**Key Concepts:** POST requests, template engines, form handling, server-side rendering.

**Technologies:** Node.js, Express.js, EJS

**Location:** `practical8/`

```bash
cd practical8
npm install
node app.js
```

### Practical 9: Full CRUD with Express & MongoDB

**Objective:** Implement complete CRUD operations with database persistence.

**Key Concepts:** Database operations, Mongoose ODM, RESTful API design, method override.

**Technologies:** Node.js, Express.js, MongoDB, Mongoose, EJS

**Location:** `practical9/`

```bash
cd practical9
npm install
# Ensure MongoDB is running
node server.js
```

### Practical 10: Full MERN Stack CRUD Application

**Objective:** Build a complete full-stack application with separate frontend and backend.

**Key Concepts:** Full-stack architecture, API consumption, CORS, modern development practices.

**Technologies:** React, Vite, Axios, Express.js, MongoDB, Mongoose

**Location:** `practical10/`

**Backend Setup:**
```bash
cd practical10/backend
npm install
node server.js
```

**Frontend Setup (in a new terminal):**
```bash
cd practical10/frontend
npm install
npm run dev
```

## 🛠 Technologies Used

### Frontend
- **React** - Component-based UI library
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Other Tools
- **EJS** - Template engine
- **CORS** - Cross-origin resource sharing
- **Method Override** - HTTP method override middleware

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VedantPanchal23/FSWD_practicals.git
   cd FSWD_practicals
   ```

2. **Navigate to any practical directory:**
   ```bash
   cd practical1  # or any other practical
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the application:**
   - For React apps: `npm run dev`
   - For Node.js servers: `node server.js` or `node app.js`

5. **For database-dependent projects (9 & 10):**
   - Ensure MongoDB is running locally or update connection strings for MongoDB Atlas

## 🎯 Learning Outcomes

By completing these practicals, you will gain proficiency in:

- Modern React development with hooks and functional components
- Client-side routing and navigation
- State management in React applications
- Form handling and validation
- API integration and asynchronous programming
- Backend development with Node.js and Express
- Database operations with MongoDB
- Full-stack application architecture
- RESTful API design
- Template engines and server-side rendering


---

**Author:** Vedant Panchal  
**Course:** Full-Stack Web Development  
