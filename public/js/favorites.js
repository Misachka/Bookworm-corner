

$(document).ready(function () {
    fetch(`/api/favorites`).then(res => res.json()).then(data => {
        const favBook= data.items;
        const list= document.querySelector('#fav-list');
        $('#fav-list').empty();
         favBook.forEach((book) => {
            const newDiv = $("<div>");
            newDiv.addClass("card");
            newDiv.html(`
            <div class="m-2 card">
              <img class="card-img-top" src="${book.thumbnail}" alt="Book Cover">
              <li>
          <h2>${this.book.title}</h2>
          <p>Author: ${this.book.author}</p>
          <p>Genre:${this.book.genre}</p>
          <p>Description: ${this.book.description}</p>
        </li>
            </div>
          `);
          $("#fav-list").append(newDiv);
         })
         return;
        });
    });

