$(document).ready(function () {

    // does a GET request to figure out which user is logged in, updates html and gets users data
    let user = $.get("/api/user_data").then(function (data) {
      console.log('user.email: ', data.email);
      console.log('user.id: ', data.id);
      return data;
    });
  });

  