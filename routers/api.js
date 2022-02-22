const express = require('express');
const api = express.Router();
const passport = require('passport');                            //add pasport
const bcrypt = require('bcrypt');
const {sql_photos} = require('./sql_photos.js');
const {pool} = require('../config');
const {redirectLogin,redirectHome} = require('../utilits/middleware.js');

api.use('/photos', sql_photos);

api.post('/login', redirectHome, 
          passport.authenticate('local', {
              failureRedirect: '/login',
              successRedirect: '/',
              failureFlash: true
            })
);

api.post('/register', redirectHome, async(req, res) => {
    const {username, email, password} = req.body;

    if (email&&username&&password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const sql = 'INSERT INTO users (username, password, email, salt) VALUES ($1, $2, $3, $4);'
        await pool.query(sql, [username, hashedPassword, email, salt])
        
        return res.redirect('/login')

    }
    return res.redirect('/register'); // if any errors
})

api.post('/logout', redirectLogin, (req, res) => {
    req.logout();
    res.redirect('/login');
});

module.exports = { api }