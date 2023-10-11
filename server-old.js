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

app.get("/home/:genre", (req, res) => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=category:" + req.params.genre +"&key=AIzaSyAi3EIdAR7i4QzZGHPltWG5xfkBqiVo9vg"

    axios.get(url)
    .then(response => {

        const books = response.data.items;

        res.render("home", {
            books
        })
    })
})
app.listen(PORT, () => console.log('Now listening'));



  // const express = require('express');
  // const exphbs = require('express-handlebars');
  // const session = require('express-session');
  // const passport = require('./config/passport');
  // const compression = require('compression');
  // const path = require('path');
  
  // const app = express();
  // const PORT = process.env.PORT || 3001;
  
  // // Set up compression for all responses
  // app.use(compression());
  
  // // Requiring our models for syncing
  // const db = require('./models');
  
  // // Set Handlebars
  // app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
  // app.set('view engine', 'handlebars');
  
  // // Serve static files from the 'public' directory
  // app.use(express.static(path.join(__dirname, 'public')));
  
  // // Handle data parsing
  // app.use(express.urlencoded({ extended: true }));
  // app.use(express.json());
  
  // // We need to use sessions to keep track of our user's login status
  // const sess = {
  //   secret: 'top secret secret',
  //   cookie: {
  //     maxAge: 300000,
  //     httpOnly: true,
  //     secure: false,
  //     sameSite: 'strict',
  //   },
  //   resave: false,
  //   saveUninitialized: true,
  //   // Set up the store based on your sequelize instance
  //   // Replace `sequelize` with your actual sequelize instance
  //   // store: new SequelizeStore({
  //   //   db: sequelize
  //   // })
  // };
  
  // app.use(session(sess));
  // app.use(passport.initialize());
  // app.use(passport.session());
  
  // // Syncing sequelize models and starting the Express app
  // db.sequelize.sync({ force: false }).then(() => {
  //   app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  // });











  