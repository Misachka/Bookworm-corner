// import dotenv from 'dotenv'
// dotenv.config()
// const apiKey = process.env.GOOGLE_KEY
// console.log(apiKey);
// const envVariables = process.env;
// const {
//   GOOGLE_KEY,
// } = envVariables;

// window.envVariables = envVariables;
// const _getRowString = (description, envVar) => { 
//   return `<p>${description}: <strong>${envVar}</strong></p>`;
// }
// window.envVariables = envVariables;
// console.log(process.env);
// console.log(process.env.GOOGLE_KEY);

// if(process.env.GOOGLE_KEY === 'production'){
//   console.log('App running in production mode');
// }
// import webpack from ('webpack');
// import webpack from 'webpack';
// import webpackConfig from '../../webpack.config'; 

// const bundler = webpack(webpackConfig);

// bundler.run(...);


$("#genre-list button").on("click", function (event) {

  const genre = event.target.textContent;
  console.log("getting books for " + genre);

  fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=AIzaSyAi3EIdAR7i4QzZGHPltWG5xfkBqiVo9vg`)
    .then(res => res.json())
    .then(data => {

      //console.log(data);
      const books = data.items;
      console.log(books);


      $('#results-list').empty();

      books.forEach((book) => {

        const newDiv = $("<div>");
        newDiv.addClass("card");

        newDiv.html(`
      <div class="book read">
        <div class="cover">
          <img src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x192'}" alt="Book Cover">
        </div>
        <div class="description">
          <p class="title">${book.volumeInfo.title}<br>
            <span class="author">${book.volumeInfo.authors}</span></p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill add-to-favorites" viewBox="0 0 16 16" data-title="${book.volumeInfo.title}" data-thumbnail="${book.volumeInfo.imageLinks.thumbnail}" data-author="${book.volumeInfo.authors}" data-book-id="${book.id}">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill add-to-cart" viewBox="0 0 16 16" data-book-id="${book.id}" data-book-title="${book.volumeInfo.title}">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
       
      </div>
      </div>
      </div>
    </div>
   


        `)



        $("#results-list").append(newDiv);
      })
      // //newDiv.css("width", "18rem");


    });
});

//search-bar

$("#search-box").on("keyup", function (e) {
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
        <div class="book read">
        <div class="cover">
          <img src="${book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x192'}" alt="Book Cover">
        </div>
        <div class="description">
          <p class="title">${book.volumeInfo.title}<br>
            <span class="author">${book.volumeInfo.authors}</span></p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill add-to-favorites" viewBox="0 0 16 16" data-title="${book.volumeInfo.title}" data-thumbnail="${book.volumeInfo.imageLinks.thumbnail}" data-author="${book.volumeInfo.authors}" data-book-id="${book.id}">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill add-to-cart" viewBox="0 0 16 16" data-book-id="${book.id}" data-book-title="${book.volumeInfo.title}">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
       
      </div>
      </div>
      </div>
    </div>
        `);

        $("#results-list").append(newDiv);
      })
      //newDiv.css("width", "18rem");


    });
})


$("#results-list").on("click", ".add-to-favorites", function (event) {
  console.log(this);
  const bookId = $(this).data("book-id");
  const bookTitle = $(this).data("title");
  const bookAuthor = $(this).data("author");
  const bookImg = $(this).data("thumbnail");
  console.log(bookId, bookTitle, bookAuthor, bookImg)
  addToFav(bookId, bookTitle, bookAuthor, bookImg);

});


$("#results-list").on("click", ".add-to-cart", function (event) {
  const bookId = $(this).data("book-id");
  const bookTitle = $(this).data("book-title");
  addToCart(bookId, bookTitle);
});

const addToFav = async (bookId, bookTitle, bookAuthor, bookImg) => {
  const response = await fetch(`/api/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ google_id: bookId, title: bookTitle, author: bookAuthor, thumbnail: bookImg }),
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