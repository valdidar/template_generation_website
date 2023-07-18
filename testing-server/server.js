const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3020;

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// middleware to handle json data
app.use(express.json());

app.use('/', require(path.join(__dirname, 'routes/root')));
app.use('/templates', require(path.join(__dirname, 'routes/templates')));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));