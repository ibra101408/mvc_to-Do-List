const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controllers/controller');
const model = require("./models/model")

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// Use the controller for all requests to the /todos route
app.get('/', (req, res) => {
    res.redirect('/todos'); // redirect the root route to the /todos route
});
app.use('/todos', controller);



// Start the server
app.listen(port, () => {
    console.log(`To-do list app listening at http://localhost:${port}`);
});