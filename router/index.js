const express = require('express');
const router = express.Router();

router
    .get('/', (req, res) => {
        res.render('index.ejs');
    })
    .get('/quiz', (req, res) => {
        res.render('quiz.ejs');
    });

module.exports = router;