const { time } = require('console');
const express = require('express');
const templateAction = require('../controller/templateAction');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('new-template')
})

router.post('/', templateAction.templateAdition);

module.exports = router;