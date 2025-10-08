const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page!</h1><p>This is a basic Express server.</p>');
});

app.get('/about', (req, res) => {
  res.send('<h2>About Us</h2><p>I am learning how to build servers with Node.js and Express!</p>');
});

app.get('/api/user', (req, res) => {
  const userData = {
    id: 1,
    name: '23AIML042',
    role: 'Developer',
  };
  res.json(userData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});