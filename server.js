const express = require('express');
const axios = require("axios")

const exphbs = require('express-handlebars');
//const express = require("express");
const path = require("path")
//const session = require("express-session");


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

// compress all responses

//app.use(compression())


// Requiring our models for syncing

//const db = require("./models");


// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Set Handlebars.


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", (req, res) => {
    res.render('home')  ; 
})
app.get("/:genre", (req, res) => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=category:" + req.params.genre +"&key=AIzaSyAi3EIdAR7i4QzZGHPltWG5xfkBqiVo9vg"

    axios.get(url)
    .then(response => {

        const books = response.data.items;

       // res.json(books);
        res.render("home", {
            books,
        })
    })
})


app.get("/favorites", (req, res) => {
    res.render('favorites')  ; 
})

app.get("/about", (req, res) => {
    res.render('about')  ; 
})


app.listen(PORT, () => console.log('Now listening'));
