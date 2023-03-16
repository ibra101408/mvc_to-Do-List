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

// GET form to create a new to-do item
router.get('/create', async (req, res) => {
    try {
        res.render('create');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// POST a new to-do item
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        await model.create(title, description);
     //   res.render('create');
        res.redirect('/todos');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



// DELETE a to-do item
router.delete('todos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await model.delete(id);
        res.redirect('/');

//        res.sendStatus(200);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



module.exports = router;
