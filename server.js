const express = require('express');
const axios = require("axios")

const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

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

        res.json(books);
        console.log ('got book items');
    })
})

app.get("/favorites", (req, res) => {
    res.render('favorites')  ; 
})

app.get("/about", (req, res) => {
    res.render('about')  ; 
})


app.listen(PORT, () => console.log('Now listening'));
