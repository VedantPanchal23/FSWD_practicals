# Practical 6: Fetch API Data (Product Cards)

[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4+-purple.svg)](https://vitejs.dev/)

An application that fetches product data from the Fake Store API and displays it in a card layout.

## 📖 Objective

Fetch data from a public API (fakestoreapi.com) and render it dynamically in React components, demonstrating asynchronous operations and API integration.

## 🎯 Key Concepts

- Fetch API for HTTP requests
- useEffect hook for side effects
- Asynchronous programming with async/await
- Data mapping and rendering
- Error handling for API calls

## ✨ Features

- Fetch products from Fake Store API
- Display products in card format
- Loading states
- Error handling
- Responsive card layout

## 📁 Project Structure

```
practical6/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   └── ProductList.jsx
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
- **Fetch API** - HTTP requests
- **CSS** - Styling

## 🚀 Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd practical6
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

- The application automatically fetches product data on load
- Products are displayed in a grid of cards
- Each card shows product image, title, and price

## 🤝 Contributing

Feel free to submit issues and enhancement requests.