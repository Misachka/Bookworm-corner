var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want login with a username/email and password
passport.use(new LocalStrategy(
  
  {
    usernameField: "email"
  },

  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
    
      if (!dbUser) {
        return done(null, false, {
          message: "Oops! Wrong email reader."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "No key, no entry!"
        });
      }
     
      return done(null, dbUser);
    });
  }
));


// Sequelize needs to serialize and deserialize the user

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.User.findByPk(id).then(function(user) {
    cb(null, user);
  });
});


// Exporting our configured passport
module.exports = passport;






























































