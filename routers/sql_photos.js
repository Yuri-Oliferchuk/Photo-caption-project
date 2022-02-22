const express = require('express');
const passport = require('passport');                            //add pasport
const sql_photos = express.Router();
const {pool} = require('../config');
const {redirectLogin,redirectHome} = require('../utilits/middleware.js');

//get all users from db
sql_photos.get('/', async(req,res) => {
    const sql = 'SELECT * FROM photos;'
    const result = await pool.query(sql)

    res.json(result.rows)
})

sql_photos.get('/:id', async(req,res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM captions JOIN photos ON captions.photo_id = photos.photo_id WHERE captions.photo_id = $1;'
    const result = await pool.query(sql, [id])

    res.json(result.rows)
})

//add new caption for the photo
sql_photos.post('/captions/:id', 
    redirectLogin,
    async(req,res) => {
    const {username} = req.user;

    const id = req.params.id;
    const text = req.body.caption;
    const sql = 'INSERT INTO captions (photo_id, caption, caption_autor) VALUES ($1, $2, $3);'
    const result = await pool.query(sql, [id, text, username])

    res.redirect(`../../../photos/${id}`)
})

module.exports = {sql_photos}