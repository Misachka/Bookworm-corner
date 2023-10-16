$("#genre-list button").on("click", function(event) {
  const genre = event.target.textContent;
  console.log("getting books for " + genre);

  fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=AIzaSyAi3EIdAR7i4QzZGHPltWG5xfkBqiVo9vg`)
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      const books = data.items;
      console.log(books);
      const booksContainer = document.querySelector('#results-list');
      
      $('#results-list').empty();

      
      books.forEach((book) => {

        const newDiv = $("<div>");
        newDiv.addClass("card");
        //newDiv.css("width", "30rem");

        newDiv.html(`
          <div class="m-2 card">
            <img class="card-img-top" src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x192'}" alt="Book Cover">
            <div class="card-body">
              <h5 class="card-title">${book.volumeInfo.title}</h5>
              
              <button class="btn btn-primary" data-title="${book.volumeInfo.title}">Add to favorites</button>
            </div>
          </div>
        `);

        $("#results-list").append(newDiv);
      })
    //newDiv.css("width", "18rem");

      
       });
  });
  
  //search-bar
  $(".search-bar").on("keyup", e =>{
    const searchInput = e.target.value;
    //const searchBook = event.target.searchInput;
    //input = input.toLowerCase();
    //console.log("getting books for " + genre);

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=AIzaSyAi3EIdAR7i4QzZGHPltWG5xfkBqiVo9vg`)
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      const books = data.items;
      console.log(books);
      const booksContainer = document.querySelector('#results-list');
      
      $('#results-list').empty();

      
      books.forEach((book) => {

        const newDiv = $("<div>");
        newDiv.addClass("card");
        //newDiv.css("width", "30rem");

        newDiv.html(`
          <div class="m-2 card">
            <img class="card-img-top" src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x192'}" alt="Book Cover">
            <div class="card-body">
              <h5 class="card-title">${book.volumeInfo.title}</h5>
              
              <button class="btn btn-primary" data-title="${book.volumeInfo.title}">Add to favorites</button>
            </div>
          </div>
        `);

        $("#results-list").append(newDiv);
      })
      return;
    //newDiv.css("width", "18rem");

      
       });
  })







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





