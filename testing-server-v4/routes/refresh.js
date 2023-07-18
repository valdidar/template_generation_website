const express = require('express');
const router = express.Router();
const refreshTokenController = require('../controller/refreshTokenController');

router.get('/', refreshTokenController.handleRefreshToken, (req, res) => {
    res.render('auth')
});

module.exports = router;