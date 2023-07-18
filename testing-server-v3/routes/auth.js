const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router.get('/', (req, res) => {
    res.render('auth')
})

router.post('/', authController.handleLogin);

module.exports = router;