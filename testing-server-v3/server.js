const express = require('express');
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
var exphbs  = require('express-handlebars');
const sendError = require(path.join(__dirname,'./middleware/error'))
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const verifyJWT = require('./middleware/verifyJWT');
const app = express();
const PORT = process.env.PORT || 3020;

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// middleware to handle json data
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

// Configure Express to use Handlebars templates
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Mount middleware to serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/', require(path.join(__dirname, 'routes/root')));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use(verifyJWT);
app.use('/new-template', require(path.join(__dirname, 'routes/new-template')));

app.all('*', (req, res, next) => {
    res.status(404);
    next();
}, sendError);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));