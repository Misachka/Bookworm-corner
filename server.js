// *** Dependencies

const express = require("express");
const path = require("path")
const session = require("express-session");
const exphbs = require('express-handlebars');

// Requiring passport as we've configured it

const passport = require("./config/passport");
const compression = require('compression')

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3001;


// compress all responses

app.use(compression())


// Requiring our models for syncing

const db = require("./models");


// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static("public"));



// We need to use sessions to keep track of our user's login status
const sess = {
    secret: 'top secret secret',
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
  
app.use(passport.initialize());
app.use(passport.session());

// Routes
// will call all the routes here once we defined everything

app.get('/', (req, res) => {
  const data = {
    title: 'BookWarm-Corner',
    navItems: ['Home', 'Favorites', 'Cart']
  };
  res.render('home', data);
});

// Syncing our sequelize models and then starting our Express app
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
















  