var path = require("path");
// authenticated
var isAuthenticated = require("../config/middleware/authenticated");

// Routes

module.exports = function(app) {


  // index route loads home.html
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect('/home');
    } else {
      res.render('login', {js: ['login.js']});
    }
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect('/home');
    } else {
      res.render('login', {js: ['login.js']});
    }
  });

  app.get("/home", isAuthenticated, function(req, res) {
    res.render('home', {js: ['home.js']});
  });


  // loads favourites
  app.get("/favourites", isAuthenticated, function(req, res) {
    res.render('favourites', {js: ['favroutes.js']});
  });

  // loads about
  app.get("/about", isAuthenticated, function(req, res) {
    res.render('about', {js: ['about.js']});
  });

  app.get("/logout", isAuthenticated, function(req, res) {
    res.render('logout', {js: ['logout.js']});
  });

};