const express = require('express');
const interface = express.Router();
const {redirectLogin,redirectHome} = require('../utilits/middleware.js');

interface.get('/', (req,res) => {
    res.render('index', {isLogin: req.isAuthenticated()})
})

interface.get('/photos', redirectLogin, (req,res) => {
    res.render('get_all_photo')
})

interface.get('/photos/:id', redirectLogin, (req,res) => {
    const id = req.params.id;
    res.render('single_photo', { id: id})
})

interface.get('/login', redirectHome, (req,res) => {
    res.render('login')
})

interface.get('/registering', redirectHome, (req,res) => {
    res.render('registering')
})

module.exports = { interface }