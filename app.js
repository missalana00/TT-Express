
// Require the express module and assigned it to variable 'express'
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    // res.send("<h1>Here it is, yes.</h1>");
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render("card", { prompt: "Who is buried in Grant's tomb?" });
    // res.locals.prompt = "Who is buried in Grant's tomb?"
    // res.render('card');
});

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.post('/hello', (req, res) => {
    console.dir(req.body);
    res.render('hello');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});

