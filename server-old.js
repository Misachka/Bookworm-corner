// *** Dependencies

const express = require("express");
const path = require("path")
const session = require("express-session");


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



// Set Handlebars.


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












  