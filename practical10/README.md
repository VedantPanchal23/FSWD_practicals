# Practical 10: Full MERN Stack CRUD Application

[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7+-green.svg)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4+-black.svg)](https://expressjs.com/)

A complete full-stack MERN application with separate frontend and backend for product management.

## 📖 Objective

Build a full-stack application with a React frontend consuming a REST API built with Express.js and MongoDB, implementing complete CRUD operations.

## 🎯 Key Concepts

- Full-stack architecture separation
- API consumption with Axios
- CORS configuration
- React Router for navigation
- Independent frontend and backend deployment
- RESTful API design

## ✨ Features

- Create new products
- Read/display all products
- Update existing products
- Delete products
- Form validation
- Responsive UI
- API error handling

## 📋 Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- npm or yarn

## 📁 Project Structure

```
practical10/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ProductForm.jsx
    │   │   └── ProductList.jsx
    │   ├── App.jsx
    │   └── ...
    ├── package.json
    └── ...
```

## 🛠 Technologies Used

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Axios** - HTTP client
- **React Router DOM** - Routing

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-origin requests

## 🚀 Installation & Setup

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd practical10/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Ensure MongoDB is running** and update connection string if needed

4. **Start the backend server:**
   ```bash
   node server.js
   ```
   Server runs on `http://localhost:5000`

### Frontend Setup

1. **Open a new terminal and navigate to frontend directory:**
   ```bash
   cd practical10/frontend
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

- View all products on the home page
- Add new products using the form
- Edit products by clicking the edit button
- Delete products using the delete button
- Navigate between pages using React Router

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create a new product |
| GET | `/api/products/:id` | Get a specific product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## 🤝 Contributing

Feel free to submit issues and enhancement requests.