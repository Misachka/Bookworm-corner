$("#genre-list button").on("click", function(event) {
  const genre = event.target.textContent;
  console.log("getting books for " + genre);

  fetch(`/api/books/${genre}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      $("#results-list").empty(); // Clear previous results

      data.forEach(book => {
        const newDiv = $("<div>");
        newDiv.addClass("card");
        newDiv.css("width", "18rem");

        newDiv.html(`
          <div class="card">
            <img class="card-img-top" src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x192'}" alt="Book Cover">
            <div class="card-body">
              <h5 class="card-title">${book.volumeInfo.title}</h5>
              <p class="card-text">${book.volumeInfo.description || 'No description available'}</p>
              <button class="btn btn-primary add-to-favorites" data-book-id="${book.id}">Add to favorites</button>
              </div>
            </div>
          `);
  
          $("#results-list").append(newDiv);
        });
      });
  });
  
  
$("#results-list").on("click", ".add-to-favorites", function(event) {
  const bookId = $(this).data("book-id");
  const bookTitle = $(this).data("book-title"); 
  addToFav(bookId, bookTitle);
});

const addToFav = async (bookId, bookTitle) => {
  const response = await fetch(`/api/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ book_id: bookId }),
  });

  if (response.ok) {
    console.log(`${bookTitle} has been added to favorites.`);
alert(`${bookTitle} has been added to favorites.`);
  }
};

// $(document).ready(function () {

//   // does a GET request to figure out which user is logged in, updates html and gets users data
//   let user = $.get("/api/user").then(function (data) {
//     console.log('user.email: ', data.email);
//     console.log('user.id: ', data.id);
//     return data;
//   });
// });

// //Should render the home.handlebars file when the user is logged in
// router.get('/home', withAuth, (req, res) => {
//   res.render('home', {
//     logged_in: true,
//     js: ['home.js']
//   });
// });
