// require('dotenv').config();
// key=process.env.GOOGLE_KEY
// const apiKey = process.env.GOOGLE_KEY


$("#genre-list button").on("click", function(event) {

  const genre = event.target.textContent;
  console.log("getting books for " + genre);

  fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=AIzaSyAi3EIdAR7i4QzZGHPltWG5xfkBqiVo9vg`)
    .then(res => res.json())
    .then(data => {
     
      //console.log(data);
      const books = data.items;
      console.log(books);
     
      // const newDiv = $("<div>");
      // $("#results-list").append(newDiv);
      // response.render("home", {books});
      // const title = books.volumeInfo.title;
      // const author = books.volumeInfo.authors;
      // const bookImg = books.volumeInfo.imageLinks.smallThumbnail;
      // const booksContainer = document.querySelector('#results-list');

      $('#results-list').empty();

      books.forEach((book) => {

        const newDiv = $("<div>");
        newDiv.addClass("card");
        //newDiv.css("width", "30rem");

        newDiv.html(`
          <div class="m-2 card">
            <img class="card-img-top" src="${book.volumeInfo.imageLinks.smallThumbnail}" alt="Book Cover">
            <div class="card-body">
              <h5 class="card-title">${book.volumeInfo.title}</h5>
              <button class="btn btn-primary add-to-cart" data-book-id="${book.id}" data-book-title="${book.volumeInfo.title}">Add to Cart</button>
              <button class="btn btn-primary add-to-favorites" data-title="${book.volumeInfo.title}" data-thumbnail="${book.volumeInfo.imageLinks.smallThumbnail}" data-author="${book.volumeInfo.authors}" data-book-id="${book.id}">Add to favorites</button>

            </div>
          </div>
        `);



    

        $("#results-list").append(newDiv);
      })
    // //newDiv.css("width", "18rem");

      
        });
  });

  //search-bar
  $(".search-bar").on("keyup", function(e){
    let input = e.target.value;
    //input = input.toLowerCase();
    //console.log("getting books for " + genre);

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyAi3EIdAR7i4QzZGHPltWG5xfkBqiVo9vg`)
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
        <img class="card-img-top" src="${book.volumeInfo.imageLinks.smallThumbnail}" alt="Book Cover">
        <div class="card-body">
          <h5 class="card-title">${book.volumeInfo.title}</h5>
          <p class="card-author" ${book.volumeInfo.authors}

          <button class="btn btn-primary add-to-cart" data-title="${book.volumeInfo.title}" data-thumbnail="${book.volumeInfo.imageLinks.smallThumbnail}" data-author="${book.volumeInfo.authors}" data-book-id="${book.id}">Add to cart</button>

        </div>
      </div>
        `);

        $("#results-list").append(newDiv);
      })
    //newDiv.css("width", "18rem");


       });
  })
  
  
$("#results-list").on("click", ".add-to-favorites", function(event) {
  console.log(this);
  const bookId = $(this).data("book-id");
  const bookTitle = $(this).data("title");
  const bookAuthor =  $(this).data("author");
  const bookImg = $(this).data("thumbnail");
  console.log(bookId, bookTitle, bookAuthor, bookImg )
  addToFav(bookId, bookTitle, bookAuthor, bookImg);
  
});


$("#results-list").on("click", ".add-to-cart", function(event) {
  const bookId = $(this).data("book-id");
  const bookTitle = $(this).data("book-title");
  addToCart(bookId, bookTitle);
});

const addToFav = async (bookId, bookTitle, bookAuthor, bookImg) => {
  const response = await fetch(`/api/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ google_id: bookId, title : bookTitle, author : bookAuthor, thumbnail : bookImg }),
  });

  if (response.ok) {
    console.log(`${bookTitle} has been added to favorites.`);
alert(`${bookTitle} has been added to favorites.`);
  }
};




const cart = [];

const addToCart = (bookId, bookTitle) => {
  const existingBook = cart.find(item => item.bookId === bookId);

  if (existingBook) {
    existingBook.quantity++;
  } else {
    cart.push({ bookId, bookTitle, quantity: 1 });
  }

  // Update the cart data in local storage
  localStorage.setItem('cart', JSON.stringify(cart));

  console.log(`${bookTitle} has been added to the cart.`);
  alert(`${bookTitle} has been added to the cart.`);
};