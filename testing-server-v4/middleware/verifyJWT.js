const jwt = require('jsonwebtoken');
require('dotenv').config();
const path = require('path');
const sendError = require(path.join(__dirname,'./error'))

const verifyJWT = (req, res, next) => {

    const token = req.cookies.jwt;
    //if no token, redirect to login page and prompt user to login first
    if (!token) {
        return res.redirect('/auth?message=login_required');
      }

    jwt.verify(
        token,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            //if error, redirect to 404 page
            if (err) return res.sendError;
            req.user = decoded.username;
            next();
        }
    );
}


module.exports = verifyJWT