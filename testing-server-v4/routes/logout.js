const express = require('express');
const router = express.Router();
const logoutController = require('../controller/logoutController');
router.get('/', logoutController.handleLogout, (req, res, next) => {
    res.redirect('/auth');
})

module.exports = router;