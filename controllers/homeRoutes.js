var path = require("path");
// authenticated
const router = require("express").Router();
var isAuthenticated = require("../config/middleware/authenticated");

 router.get("/", function(req, res) {
    if (req.user) {
      res.redirect('/home');
    } else {
      res.render('home', {js: ['login.js']});
    }
  });

  router.get("/login", function(req, res) {
    if (req.user) {
      res.redirect('/home');
    } else {
      res.render('login', {js: ['login.js']});
    }
  });

  router.get("/home", isAuthenticated, function(req, res) {
    res.render('home', {js: ['home.js']});
  });


  // loads favourites
  router.get("/favorites", isAuthenticated, function(req, res) {
    res.render('favorites', {js: ['favorites.js']});
  });


  router.get("/logout", isAuthenticated, function(req, res) {
    res.render('logout', {js: ['logout.js']});
  });

module.exports = router;
