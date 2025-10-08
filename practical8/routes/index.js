const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/calculate', function(req, res, next) {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const sum = num1 + num2;
  
  res.render('result', { sum: sum });
});

module.exports = router;