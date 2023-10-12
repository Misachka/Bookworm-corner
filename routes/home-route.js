


  // index route loads home.html
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/home");
    } else {
      res.render('signup', {js: ['signup.js']});
    }
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/home");
    } else {
      res.render('login', {js: ['login.js']});
    }
  });