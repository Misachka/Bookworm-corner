const path = require("path");
const express = require('express');
const session = require('express-session');
//const axios = require("axios");
const db = require('./models');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  app.use(session(sess));

  app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname , 'public')));

app.use(routes);



sequelize.sync({force : false}).then(function(){
    app.listen(PORT, () => console.log('Now listening on port', PORT));
})

// Serve static files from the 'public' directory



// Set Handlebars


//move to controller directory









// app.get("/", (req, res) => {
//     res.render('home');
// });

// app.get("/about", (req, res) => {
//     res.render('about');
// });
// app.get("/:genre", (req, res) => {
    


//     const url = "https://www.googleapis.com/books/v1/volumes?q=category:" + req.params.genre +"&key=AIzaSyAi3EIdAR7i4QzZGHPltWG5xfkBqiVo9vg"

//     axios.get(url)
//     .then(response => {

//         const books = response.data.items;

//         res.json(books);
//         console.log ('got book items');
//     })
// });

// app.get("/favorites", (req, res) => {
//     res.render('favorites');
// });

// app.get("/about", (req, res) => {
//     res.render('about');
// });
