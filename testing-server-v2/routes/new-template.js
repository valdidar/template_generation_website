const { time } = require('console');
const express = require('express');
const path = require('path');
const fs = require('fs')
const templateAction = require('../controller/templateAction');
const templates = require(path.join('../data/templates'))
const router = express.Router()

router.get('/', (req, res) => {
    res.render('new-template', {
        templates: templates
    })
})

router.post('/', templateAction.templateAdition);

module.exports = router;