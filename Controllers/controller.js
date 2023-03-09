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

// POST a new todo item
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    try {
        await model.create(title, description);
        res.redirect('/todos');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
