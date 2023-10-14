$(document).ready(function () {

  // does a GET request to figure out which user is logged in, updates html and gets users data
  let user = $.get("/api/user").then(function (data) {
    console.log('user.email: ', data.email);
    console.log('user.id: ', data.id);
    return data;
  });
});

//Should render the home.handlebars file when the user is logged in
router.get('/home', withAuth, (req, res) => {
  res.render('home', {
    logged_in: true,
    js: ['home.js']
  });
});