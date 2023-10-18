const path = require("path");
// authenticated
const router = require("express").Router();
const isAuthenticated = require("../config/middleware/authenticated");
const withAuth = require("../utils/auth");
const { Favorites, User, Book } = require("../models");

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
  
  router.get("/favorites", withAuth, async (req, res) => {
    try {
      const user = await User.findByPk(req.session.user_id, {
        include: [{ model: Favorites, include: [Book] }],
      });
  
      res.render('favorites', {js: ['favorites.js']});
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // loads favourites
  // router.get("/favorites", isAuthenticated, function(req, res) {
  //   res.render('favorites', {js: ['favorites.js']});
  // });


  router.get("/logout", isAuthenticated, function(req, res) {
    res.render('logout', {js: ['logout.js']});
  });

module.exports = router;