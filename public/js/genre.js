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
              <button class="btn btn-primary" data-title="${book.volumeInfo.title}">Add to favorites</button>
            </div>
          </div>
        `);

        $("#results-list").append(newDiv);
      });

      // Event listener for "Add to Favorites" button
      $(".btn-primary").on("click", function(event) {
        const title = $(this).data("title");
        addToFav(title);
      });
    });
});

const addToFav = async (title) => {
  const response = await fetch(`/api/favorites/${title}`, {
    method: 'POST'
  });

  if (response.ok) {
    console.log(`${title} added to favorites.`);
  }
};
