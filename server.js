const express = require('express');
const axios = require("axios");
const exphbs = require('express-handlebars');

//const session = require("express-session");
const app = express();

const path = require("path");


const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

// Serve static files from the 'public' directory
app.use('/public', express.static(__dirname + '/public'));

// Set Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/about", (req, res) => {
    res.render('about');
});
app.get("/:genre", (req, res) => {
    


    const url = "https://www.googleapis.com/books/v1/volumes?q=category:" + req.params.genre +"&key=AIzaSyAi3EIdAR7i4QzZGHPltWG5xfkBqiVo9vg"

    axios.get(url)
    .then(response => {

        const books = response.data.items;

        res.json(books);
        console.log ('got book items');
    })
});

app.get("/favorites", (req, res) => {
    res.render('favorites');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.listen(PORT, () => console.log('Now listening on port', PORT));
