const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const logoutController = require('../controller/logoutController');

router.get('/', (req, res, next) => {
    const message = req.query.message;
    if (message === 'login_required') {
        res.render('auth', {message: 'Please login first'});
        return;
    }
    res.render('auth')
})

router.post('/', authController.handleLogin);

module.exports = router;