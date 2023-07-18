const express = require('express');
const path = require('path');
var exphbs  = require('express-handlebars');
const sendError = require(path.join(__dirname,'./middleware/error'))
const app = express();
const PORT = process.env.PORT || 3020;

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// middleware to handle json data
app.use(express.json());

// Configure Express to use Handlebars templates
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Mount middleware to serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/new-template', require(path.join(__dirname, 'routes/new-template')));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/', require(path.join(__dirname, 'routes/root')));

app.all('*', (req, res, next) => {
    res.status(404);
    next();
}, sendError);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));