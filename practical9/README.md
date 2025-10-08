# Practical 9: Full CRUD with Express & MongoDB

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4+-black.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7+-green.svg)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-7+-red.svg)](https://mongoosejs.com/)

A complete CRUD application with Express.js and MongoDB for managing tasks.

## 📖 Objective

Implement full CRUD operations (Create, Read, Update, Delete) for a Task model stored in MongoDB using Mongoose ODM.

## 🎯 Key Concepts

- Database operations with MongoDB
- Mongoose ODM for schema definition
- RESTful API design
- HTTP method override for PUT/DELETE
- Server-side rendering with EJS

## ✨ Features

- Create new tasks
- Read/display all tasks
- Update existing tasks
- Delete tasks
- Form validation
- Dynamic EJS templates

## 📋 Prerequisites

- MongoDB installed and running locally, or MongoDB Atlas account
- Node.js v18+

## 📁 Project Structure

```
practical9/
├── server.js
├── package.json
├── views/
│   └── tasks.ejs
└── README.md
```

## 🛠 Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **EJS** - Template engine
- **Method-override** - HTTP method override

## 🚀 Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd practical9
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Ensure MongoDB is running:**
   - For local MongoDB: Start your local MongoDB server
   - For MongoDB Atlas: Update the connection string in `server.js`

4. **Start the server:**
   ```bash
   node server.js
   ```

5. **Open your browser and visit:** `http://localhost:3000`

## 📖 Usage

- View all tasks on the home page
- Add new tasks using the form
- Edit tasks by clicking the edit link
- Delete tasks using the delete button

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Display all tasks |
| POST | `/` | Create a new task |
| GET | `/edit/:id` | Show edit form for a task |
| PUT | `/:id` | Update a task |
| DELETE | `/:id` | Delete a task |

## 🤝 Contributing

Feel free to submit issues and enhancement requests.