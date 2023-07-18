const express = require('express');
const router = express.Router();
const templateAction = require('../controller/templateAction');

router.post('/', templateAction.templateAdition);

module.exports = router;