const router = require('express').Router();
const withAuth = require('../config/middleware/passport');
const {User, Book, Favorites} = require('../models');

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/home');
      return;
    }
  
    res.render('login');
  });



