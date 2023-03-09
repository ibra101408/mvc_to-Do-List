const express = require('express');
const router = express.Router();
const model = require('../models/model');

// GET all to-do items
router.get('/', async (req, res) => {
    try {
        const todos = await model.getAll();
        res.render('index', { todos });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});


module.exports = router;
