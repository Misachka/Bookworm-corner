

$(document).ready(function () {
    fetch(`/api/favorites`)
    
    .then(data => {
        const favBooks= data;
        console.log(favBooks);
        const list= document.querySelector('#fav-list');
        $('#fav-list').empty();
         favBooks.forEach((favBook) => {
            const newDiv = $("<div>");
            newDiv.addClass("card");
            newDiv.html(`
            <div class="m-2 card">
              <img class="card-img-top" src="${favBook.thumbnail}" alt="Book Cover">
              <li>
          <h2>${this.favBook.title}</h2>
          <p>Author: ${this.favBook.author}</p>
          <p>Genre:${this.book.genre}</p>
          <p>Description: ${this.favBook.description}</p>
        </li>
            </div>
          `);
          $("#fav-list").append(newDiv);
         })
         
         return;
        });
    });

