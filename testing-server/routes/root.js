const { time } = require('console');
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.post('/', (req, res)=>{
    console.log(req.body);
    res.send('ok');
});

module.exports = router;